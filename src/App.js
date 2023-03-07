import React,{Component} from 'react';
import SetUp from './components/setup'; 
import Display from './pages/display';
import AirdndDetail from './pages/airdndDetail';
import Profile from './pages/profile';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router,Routes,  Route} from "react-router-dom";



class App extends Component{
  state={
    page:1,
    data:[],
    adults:1,
    children:0,
    infants:0,
    pets:0,

    //signin info
    scountry:sessionStorage.getItem('scountry')||'',
    sphoneNo:sessionStorage.getItem('sphoneNo')||'',
    sfname:sessionStorage.getItem('sfname')||'',
    slname:sessionStorage.getItem('slname')||'',
    sbday:sessionStorage.getItem('sbday')||'',
    semail:sessionStorage.getItem('semail')||'',

    //login info
    lcountry:sessionStorage.getItem('scountry')||'',
    lphoneNo:sessionStorage.getItem('sphoneNo')||'',

    //user
    user:sessionStorage.getItem("user")||[],
    userId:sessionStorage.getItem("userId")||'',
    userprops:[]
  }

    incItems=input=>(e)=>{
    this.setState({[input]:parseInt(e.target.value) + 1},
    ()=>sessionStorage.setItem(input,e.target.value)
    )  
    }
    decItems=input=>(e)=>{
    this.setState({[input]:parseInt(e.target.value) - 1},
    ()=>sessionStorage.setItem(input,e.target.value))
    }


   
  
    //account is online.

  componentDidMount(){
    axios.get('/airdnd')
         .then(res=>{
           this.setState({data:res.data},
           //()=>console.log(this.state.data)
           )})
         .catch(err=>{console.log(err)});
        
         //create userId session using cookie value
         const setUserId=(val)=>{
          sessionStorage.setItem("userId",val );
          this.setState({userId:sessionStorage.getItem("userId")})
         // console.log(`user ${this.state.user}`)
         }
         const accountOnline=()=>{
          //get cookie
          var userIdCookie=document.cookie;
          const userIdArr=userIdCookie.split("=")
          //get cookie value
          const userIdVal=userIdArr[1];
          //call  setUserId function
          setUserId(userIdVal);
    
        }
        accountOnline();

         //retrieve user property
      const userId=this.state.userId;
     axios.get(`/airdnd/profile/${userId}`)
     .then(res=>{
      this.setState({userprops:res.data})
           })
      .catch(err=>{console.log(err)})

    /* 
     to update
    axios.get('/airdnd/username')
      .then(res=>console.log(res.data,"attempt"))
      .catch(err=>console.log(err))*/
      
  }

  makeReservation=(id,date1,date2,nights,cost)=>{
    const{adults,children,infants,pets}=this.state;
    const reservInfo={
      roomId:id,
      checkin:date1,
      checkout:date2,
      adults:adults,
      children:children,
      infants:infants,
      pets: pets,
      nights:nights,
      cost:cost
    }
   axios.post('/airdnds/reservation',reservInfo)
    //.then(res=>console.log(res.data,"sent"))
    .catch(err=>console.log(err))
   // console.log(reservInfo);
  }
  //set input
  setInput=input=>e=>{
    this.setState({[input]:e.target.value},
      sessionStorage.setItem(input,e.target.value))
}
//submit signin
submitSignIn=()=>{
  const{scountry,sphoneNo,sfname,slname,sbday,semail}=this.state
  const signUpData={
      country:scountry,
      phone:sphoneNo,
      fname:sfname,
      lname:slname,
      bday:sbday,
      email:semail
  }
  //console.log(signUpData)
  axios.post('/airdnd/signup',signUpData)
  //.then(res=>console.log(res.data))
  .catch(err=>console.log(err))
}
//impliment search
handleTextSearch=(e)=>{
  const searchText=e.target.value
  const data=this.state.data;
  const results=data.filter(data=>data.country.toLowerCase().includes(searchText)||data.city.toLowerCase().includes(searchText) /* ===searchText*/);
 this.setState({data:results}/*,()=>console.log(results)*/);
}

//impliment property search
handlePropertySearch=(e)=>{
  const searchText=e.target.value;
  const data=this.state.userprops;
  const results=data.filter(data=>data.city.toLowerCase().includes(searchText)||
                                  data.price.toLowerCase().includes(searchText)||
                                  data.apartment_title.toLowerCase().includes(searchText));
  this.setState({userprops:results})
 
}

///login data
accountLogin=()=>{
  const phone={
    phone:this.state.lphoneNo
  }
  axios.post('/airdnd/login/user',phone)
  .then(res=>{
    this.setState({ user:res.data},
     ()=>{
      sessionStorage.setItem('user',this.state.user)
      //create a cookie to access user id
      //var date=new Date(9999,4,4);
      var date=new Date(2023,28,21);
      var dateString = date.toUTCString();
      var cookieString = 'userId='+this.state.user._id+';expires='+dateString;
      document.cookie=cookieString;
      //console.log(document.cookie)
   
     // console.log(this.state.user)
     })
     
  })
  .catch(err=>console.log(err))
}

//mui theme

  
 render(){
 const{data, adults,children,infants,pets,scountry,sphoneNo,sfname,slname,sbday,semail,lcountry,
  lphoneNo, userId,userprops,user}=this.state;
  return (
    <div className="App"> 
<Router>
      
    <div className="App"> 
    <Routes>
      <Route path='/' element={<Display data={data} setInput={this.setInput} scountry={scountry} handleTextSearch={this.handleTextSearch}
             sphoneNo={sphoneNo} sfname={sfname} slname={slname} sbday={sbday} semail={ semail} 
              submitSignIn={this.submitSignIn} lcountry={lcountry} lphoneNo={lphoneNo} accountLogin={this.accountLogin} userId={userId}/> } />
      <Route path='/setup' element={ <SetUp incItems={this.incItems} decItems={this.decItems} userId={userId}/>} />
      <Route path='/:airdndId'  element={<AirdndDetail  incItems={this.incItems} decItems={this.decItems} user={user}
             children={children} adults={adults} infants={infants} pets={pets} makeReservation={this.makeReservation}/>}/>
      <Route path='/profile/:userId' element={<Profile handlePropertySearch={this.handlePropertySearch} userprops={userprops} userId={userId}/>}/>
    </Routes>
    </div>
  </Router>
      </div>
   
    );
 }

}

export default App;

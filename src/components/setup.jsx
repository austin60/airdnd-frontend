import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React,{Component} from "react";
import Pg1 from "../pages/form/pg1";
import Pg2 from "../pages/form/pg2";
import Pg3 from "../pages/form/pg3";
import Pg4 from "../pages/form/pg4";
import Pg5 from "../pages/form/pg5";
import Pg6 from "../pages/form/pg6";
import Pg7 from "../pages/form/pg7";
import Pg8 from "../pages/form/pg8";
import Pg9 from "../pages/form/pg9";
import Pg10 from "../pages/form/pg10";
import Pg11 from "../pages/form/pg11";
import Pg12 from "../pages/form/pg12";
import Pg13 from "../pages/form/pg13";
import Pg14 from "../pages/form/pg14";
import FormNav from "./formNav";
import axios from 'axios';



class SetUp extends Component{
    state={
        page:1,
        place_desc:sessionStorage.getItem('place_desc')||'house',
        guest_space_access:sessionStorage.getItem('guest_space_access')||'entire place',
        host_adress:sessionStorage.getItem('host_adress')||'',
        guests:sessionStorage.getItem('guests')||1,
        beds:sessionStorage.getItem('beds')||1,
        bedrooms:sessionStorage.getItem('bedrooms')||1,
        bathrooms:sessionStorage.getItem('bathrooms')||1,
        has_to_offer:sessionStorage.getItem('has_to_offer')||[],
        apartment_title:sessionStorage.getItem('apartment_title')||'',
        apartment_desc:sessionStorage.getItem('apartment_desc')||[],
        guest_type:sessionStorage.getItem('guest_type')||'any guest',
        price:sessionStorage.getItem('price')||50,
        host_type:sessionStorage.getItem('host_type')||'private individual',
        anyofthese:sessionStorage.getItem('anyofthese')||[],
        canc_policy:sessionStorage.getItem('canc_policy')||'',
        files:{creator:'',title:'',message:'',tags:'',selectedFile:''},
        file:sessionStorage.getItem('file')||[],
        street:sessionStorage.getItem('street')||'',
        state:sessionStorage.getItem('state')||'',
        city:sessionStorage.getItem('city')||'',
        zip_code:sessionStorage.getItem('zip_code')||'',
        country:sessionStorage.getItem("country")||''
        
    }
    //next form page
    nextPage=()=>{
        const {page}=this.state;
        this.setState({page:page+1},
        //()=>sessionStorage.setItem("page",this.state.page)
        localStorage.setItem("page",JSON.stringify(this.state.page))
        )
    }

    //previous form page
    prevPage=()=>{
        const {page}=this.state;
        this.setState({page:page-1},
        //()=>sessionStorage.setItem("page",this.state.page)
        localStorage.setItem("page",JSON.stringify(this.state.page))
        )  
    }

    setInput=input=>e=>{
        this.setState({[input]:e.target.value},
        sessionStorage.setItem(input,e.target.value)
        //localStorage.setItem(input,JSON.stringify(e.target.value))  
          )
    }
    //set page 6 items and price
 
    sethasToOffer=(e)=>{
      const {value,checked}=e.target;

      if(checked){
        this.setState(prevState=>({has_to_offer:[...prevState.has_to_offer,value]}),
            sessionStorage.setItem('has_to_offer',this.state.has_to_offer)
           )
      }
      else{
        this.setState({has_to_offer:this.state.has_to_offer.filter(offer=>offer!==value)},
       console.log(this.state.has_to_offer),
        sessionStorage.setItem('has_to_offer',this.state.has_to_offer))
        
    }
    }
    setAnyof=(e)=>{
        const {value,checked}=e.target;
  
        if(checked){
          this.setState(prevState=>({anyofthese:[...prevState.anyofthese,value]}),
              console.log(this.state.anyofthese),
              sessionStorage.setItem('anyofthese',this.state.anyofthese))
        }
        else{
          this.setState({anyofthese:this.state.anyofthese.filter(anyof=>anyof!==value)},
          console.log(this.state.anyofthese),
          sessionStorage.setItem('anyofthese',this.state.anyofthese))
          
      }
      }

      setApDesc=(e)=>{
        const {value,checked}=e.target;
  
        if(checked){
          this.setState(prevState=>({ apartment_desc:[...prevState.apartment_desc,value]}),
              console.log(this.state.apartment_desc),
              sessionStorage.setItem('apartment_desc',this.state.apartment_desc))
        }
        else{
          this.setState({apartment_desc:this.state.apartment_desc.filter(anyof=>anyof!==value)},
          console.log(this.state.apartment_desc),
          sessionStorage.setItem('apartment_desc',this.state.apartment_desc))
          
      }
      }
   
   
    inputChange=input=>e=>{
      this.setState({[input]:e.target.value},
     ()=>console.log(`host address is ${this.state.input}`)) 
    
    
    }

    hostLocChange=input=>e=>{
        this.setState(prevState => ({
            ...prevState,
            host_location: {
                ...prevState.host_location,
                [input]:e.target.value
            }
        }),()=>console.log(`${input} location ${this.state.host_location.zip_code}`),
        sessionStorage.setItem('host_location',this.state.host_location))
      }
      incItems=input=>(e)=>{
        this.setState({[input]:parseInt(e.target.value) + 1},
       ()=>sessionStorage.setItem(input,e.target.value))
        
        }
        decItems=input=>(e)=>{
        this.setState({[input]:parseInt(e.target.value) - 1},
        ()=>sessionStorage.setItem(input,e.target.value))
        }
      
    //upload file
      getFiles=({base64})=>{
        this.setState({files:{...this.state.files,selectedFile:base64},
       },
       ()=> sessionStorage.setItem('file',this.state.files.selectedFile))
       
      }
     
    //toast notification  
    notify = () => toast("Set Up complete!");

    //upload data to mongodb
    finish=()=>{
        const{place_desc,guest_space_access,host_adress,has_to_offer,apartment_title,apartment_desc,
            guest_type,price,host_type,guests,bathrooms,beds,bedrooms,canc_policy,anyofthese,file,street,
            apt,state,city, zip_code,country}=this.state;
            const{userId}=this.props
          /*  if(place_desc||guest_space_access||host_adress||has_to_offer||apartment_title||apartment_desc||
                guest_type||price||host_type||guests||bathrooms||beds||bedrooms||file||street||
                apt||state||city|| zip_code||country==="")
                {
                     console.log("empty fields")
                     document.getElementById("notification").innerHTML="*Make sure all required fields are field"
                }
            else{*/
                         //create info object to send state data to mongodb
        var info={
            place_desc:place_desc,
            guest_space_access:guest_space_access, 
            host_adress: host_adress, 
            guests:guests,
            beds: beds,
            bedrooms: bedrooms,
            bathrooms:bathrooms,
            has_to_offer: has_to_offer,
            apartment_title: apartment_title,
            apartment_desc: apartment_desc,
            guest_type: guest_type,
            price: price,
            host_type: host_type,
            anyofthese: anyofthese,
            cancellation_policy: canc_policy,
            files:file,
            street:street,
            state: state,
            city: city,
            zip_code: zip_code,
            country:country,
            apt:apt,
            userId:userId
        }
        console.log(info);
       axios.post('/airdnd/post',info)
       .then(res=>{console.log(res.data);this.notify()})
       .catch(err=>{console.log(err)})
          
     
    }
    renderSwitch=(page)=>{
        const{place_desc,guest_space_access,host_adress,has_to_offer,apartment_title,apartment_desc,
            guest_type,price,host_type,guests,bathrooms,beds,bedrooms,canc_policy,street,
            apt,state,city, zip_code,country}=this.state;
           //const {decItems,incItems}=this.props
        switch(page){
            case 1:return <Pg1 nextPage={this.nextPage}/> ;
            case 2:return <Pg2 place_desc={place_desc}  setInput={this.setInput} nextPage={this.nextPage} prevPage={this.prevPage}/>;
            case 3:return <Pg3 guest_space_access={guest_space_access} setInput={this.setInput} nextPage={this.nextPage} prevPage={this.prevPage}/> ;
            case 4:return <Pg4 host_adress={host_adress} setInput={this.setInput} nextPage={this.nextPage} prevPage={this.prevPage}/>;
          //  case 5:return <Pg5 host_location={host_location}  hostLocChange={this.hostLocChange} nextPage={this.nextPage} prevPage={this.prevPage}/>;
            case 5:return <Pg5 street={street} apt={apt} state={state} city={city} zip_code={zip_code} country={country} nextPage={this.nextPage} prevPage={this.prevPage} setInput={this.setInput}/>;
            case 6:return (<Pg6 nextPage={this.nextPage} prevPage={this.prevPage} beds={beds} bedrooms={bedrooms} 
                           guests={guests} incItems={this.incItems} bathrooms={bathrooms} decItems={this.decItems}/>);
            case 7:return <Pg7 has_to_offer={has_to_offer} sethasToOffer={this.sethasToOffer} nextPage={this.nextPage} prevPage={this.prevPage}/>;
            case 8:return <Pg8 apartment_title={apartment_title} setInput={this.setInput} nextPage={this.nextPage} prevPage={this.prevPage}/>;
            case 9:return <Pg9 apartment_desc={apartment_desc} setApDesc={this.setApDesc} nextPage={this.nextPage} prevPage={this.prevPage}/>;
            case 10:return <Pg10 guest_type={guest_type} setInput={this.setInput} nextPage={this.nextPage} prevPage={this.prevPage}/>;
            case 11:return <Pg11 price={price} nextPage={this.nextPage} prevPage={this.prevPage} incItems={this.incItems}  decItems={this.decItems}/>;
            case 12:return <Pg12 host_type={host_type} setInput={this.setInput} anyofthese={this.anyofthese} setAnyof={this.setAnyof} nextPage={this.nextPage} prevPage={this.prevPage}/> ;
            case 13:return <Pg13 canc_policy={canc_policy} setInput={this.setInput} prevPage={this.prevPage} nextPage={this.nextPage}/> ;
            case 14:return <Pg14 getFiles={this.getFiles} prevPage={this.prevPage} nextPage={this.nextPage}  finish={this.finish}/>;
            default:return <Pg12 />
       }
    }
    render(){
        const{page}=this.state;
        return(
            <div className="form-page">
            <FormNav />
                {this.renderSwitch(page)}
            
            </div>
        )
        
    }
}
export default SetUp;
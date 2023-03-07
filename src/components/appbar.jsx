import React ,{useState,useRef,/*useEffect*/} from 'react'
import {FaAirbnb } from "react-icons/fa";
import { HiOutlineBars3} from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import {BiSearch } from "react-icons/bi";
import { NavLink} from 'react-router-dom';
import SignInForms from "./signinForm";
import LogIn from './login';

const AppBar=(props)=>{
    const [isOpen, setIsOpen]=useState(false);
    const [dataOpen, setDataOpen]=useState(false);
    const [loginOpen, setLoginOpen]=useState(false);
    let menuRef=useRef();
   //set signin form 1
      const openModal=()=>{
        setIsOpen(true);
        const x=document.getElementById("dropdown");
        x.style.display = "none";
      }
       const closeModal=()=>{
        setIsOpen(false);
        setDataOpen(true);
      }
    
  //set signin form 2
  const openDataModal=()=>{
    setDataOpen(true);
  }

  const closeDataModal=()=>{
    setDataOpen(false);
  }
  //back to option modul
    const backToOption=()=>{
        setDataOpen(false);
        setIsOpen(true);
    }
 //close all moduls
 const closeBoth=()=>{
    setIsOpen(false);
    setDataOpen(false);
 }
 //open Login form
const openLogin=()=>{
  const x=document.getElementById("dropdown");
  x.style.display = "none";
  setLoginOpen(true)
}

//close Login
const closeLogin=()=>{
  setLoginOpen(false)


}
//close menu on random click
/*useEffect(()=>{
 document.addEventListener("mousedown",e=>{
  if(!menuRef.current.contains(e.target)){
    const x=document.getElementById("dropdown");
  x.style.display = "none";
  }
 })
})*/
   
    const handleClick=()=>{
        const x=document.getElementById("dropdown");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
        }
 const checkLogged=()=>{
  const {userId}=props
  if(userId===''){
    console.log("log in")
    openLogin();
  }
  else{
    console.log('logged') 
  }
 }
  

        const{scountry,sphoneNo,sfname,slname,sbday,semail,submitSignIn,lcountry,lphoneNo,setInput,accountLogin,userId,
          handleTextSearch}=props
    return(
        <>
        
        <div className='main-nav'>
        <nav className='nav'>
           <div className="airIcon"><FaAirbnb  className="bar-icon"/><b className="icon-name">airdnd</b></div>

            <div className="search">
                <input type="text" placeholder="search location" onChange={handleTextSearch}/>
                 <div className="search-icon"><BiSearch/></div> 
            </div>
            <div className="user">
                <div><HiOutlineBars3 size={20} onClick={handleClick} className="app-icon"/></div>
                <div><NavLink to={`/profile/${userId}`} style={{color:"black",textDecoration:"none"}}><CgProfile  className="app-icon"/></NavLink>  </div>
                 {userId &&(<span id='online'></span>)}
            </div>  
               
        </nav>
        </div>
         <div className="dropdown" ref={menuRef} id="dropdown">
         <ul>
             <li onClick={openModal}>Sign up</li>
             <li onClick={openLogin}>Log in</li>
             <hr/>
             <li onClick={checkLogged}><NavLink to={userId?"/setup":loginOpen}style={{color:"black",textDecoration:"none"}}>Airdnd your home</NavLink></li>
             <li>Host an expirience </li>
             <li>Help</li>
         </ul>
         </div>
         <SignInForms isOpen={isOpen} dataOpen={dataOpen} openModal={openModal} closeModal={closeModal}
          openDataModal={openDataModal} closeDataModal={closeDataModal} backToOption={backToOption} closeBoth={closeBoth} setInput={setInput}
          scountry={scountry}sphoneNo={sphoneNo} sfname={sfname} slname={slname} sbday={sbday} semail={ semail} submitSignIn={submitSignIn}/>
          <LogIn loginOpen={loginOpen} closeLogin={closeLogin} lcountry={lcountry} lphoneNo={lphoneNo} setInput={setInput} accountLogin={accountLogin}/>
         </>
    )
}
export default AppBar
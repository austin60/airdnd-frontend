//import React,{useState} from 'react';
import Modal from 'react-modal';
import { FaChevronLeft} from "react-icons/fa";

const SignInData=(props)=>{

  const customStyles = {
    content: {
      width:'44%',
      borderRadius:'15px',
      height:'75vh',
      top: '45%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
 
  const{setInput,sfname,slname,sbday,semail,submitSignIn}=props
  return(
    
   <div>
      <Modal
        isOpen={props.dataOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false} 
      >
          <div className="sign-name-title">
                <div className="signin-back-icon"><div className='back-icon' onClick={props.backToOption}>< FaChevronLeft size={18}/></div><b>Finish signing up</b></div>
                <div className="signin-title"></div>
            </div>
            <hr />
        <div className="signin-name">
          <div className="signinnames">
            <div className="signin-fname signiname">
                <input type="text" placeholder='First name' value={sfname} onChange={setInput('sfname')}/>
            </div>
            <div className="signin-lname signiname">
                <input type="text" placeholder='Last name' value={slname} onChange={setInput('slname')}/>
            </div>
            </div>
            <p  className='signin-desc'>Make sure it matches on your government ID</p>
        </div>

        <div className="signin-bdate">
            <input type="date" placeholder='Birthdate' className='signin-input' value={sbday}  onChange={setInput('sbday')}/>
            <p  className='signin-desc'>To sign up,you need to be atleast 18.Your birthday won't 
            be shared with anyone else using Airdnd </p>
        </div>
        <div className="signin-email">
            <input type="email" placeholder='Email' className='signin-input' value={semail} onChange={setInput('semail')}/>
            <p  className='signin-desc'>We'll email you trip confirmations and reciepts </p>
        </div>
        <p  className='signin-desc'>
            By selecting <b>Agree and continue</b>, I agree to Airdnd's <u className='link'><b> Terms of service</b></u>,
            <u className='link'><b>Payment terms of service</b></u>, and <u className='link'><b>Nondiscrimination terms of Service</b></u>, and acknowledge the 
            <u className='link'><b>Privacy Policy</b></u>
        </p>
        <button className='signin-btn' onClick={()=>{props.closeDataModal(); submitSignIn()}}>Agree and continue</button>
     
      </Modal>
   </div>
  )
}
export default SignInData;
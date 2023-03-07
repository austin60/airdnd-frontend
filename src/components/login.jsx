//import React,{useState} from 'react';
import Modal from 'react-modal';
import { FaFacebook,FaApple } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { ImCross } from "react-icons/im";

const LogIn=(props)=>{


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
  const {setInput,lcountry, lphoneNo,loginOpen,closeLogin,accountLogin}=props
  return(
  
   <div>
      <Modal
        isOpen={loginOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false} 
        backdrop={"static"}
      >
        <div className='login-title'>
                <div className="signinoption-icon back-icon" onClick={closeLogin}>< ImCross/></div>
                <div className="signinoption-title">Log in or signup</div>
        </div>
        <div className="user-input">
            <div className="user-input-only">
            <select name="country" id="country"  placeholder="Country/Region" value={lcountry} onChange={setInput('lcountry')} >
                  <option value="Kenya">Kenya</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Rwanda">Rwanda</option>
                 </select>
               
               <input type="text" placeholder='Phone Number' className='user-signin-input' value={ lphoneNo} onChange={setInput('lphoneNo')}/>
            </div>
            <button onClick={accountLogin}>Continue</button>
            <p className='signin-desc'>We'll call or text you to confirm your number.Standard message and data rates apply.</p>
        </div>
        <div className="signinoptions">
            <div className='signinoption'>
                <div className="signinoption-icon"><FaFacebook size={20}/></div>
                <div className="signinoption-title">Continue with Facebook</div>
            </div>
            <div className='signinoption'>
                <div className="signinoption-icon"><FcGoogle size={20}/></div>
                <div className="signinoption-title">Continue with Google</div>
            </div>
            <div className='signinoption'>
                <div className="signinoption-icon"><FaApple size={20}/></div>
                <div className="signinoption-title">Continue with Apple</div>
            </div>
            <div className='signinoption'>
                <div className="signinoption-icon"><CiMail size={20}/></div>
                <div className="signinoption-title">Continue with email</div>
            </div>
        </div>
      </Modal>
   </div>
  )
}
export default LogIn;
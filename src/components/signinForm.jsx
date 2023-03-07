import SignIn from "../pages/signinForm/optionModule";
import SignInData from "../pages/signinForm/dataModule";

const SignInForms=(props)=>{
    const{scountry,sphoneNo,sfname,slname,sbday,semail,backToOption,setInput,dataOpen,openDataModal,
          closeDataModal,isOpen,openModal,closeModal,closeBoth,submitSignIn}=props
    return(
        <div>
            <SignIn isOpen={isOpen} openModal={openModal} closeModal={closeModal} closeBoth={closeBoth} setInput={setInput} scountry={scountry} sphoneNo={sphoneNo}/>
            <SignInData dataOpen={dataOpen} openDataModal={openDataModal} closeDataModal={closeDataModal} 
                        backToOption={backToOption} setInput={setInput} sfname={sfname} slname={slname} sbday={sbday} semail={semail} submitSignIn={submitSignIn}/>
        </div>
    )
}
export default SignInForms
import AppBar from "../components/appbar";
import Card from "../components/card";

const Display=(props)=>{
   const{scountry,sphoneNo,sfname,slname,sbday,semail,submitSignIn,lcountry,lphoneNo,accountLogin,userId,handleTextSearch,getUserProperty}=props
    return(
    <>
  <div className="display-page">
   
  
  <AppBar setInput={props.setInput}  scountry={scountry}sphoneNo={sphoneNo} sfname={sfname} slname={slname} accountLogin={accountLogin} getUserProperty={getUserProperty}
          sbday={sbday} semail={ semail} submitSignIn={submitSignIn} lcountry={lcountry} lphoneNo={lphoneNo} userId={userId} handleTextSearch={handleTextSearch}/>
   <div className="display-content">
    <Card data={props.data}/>
   </div>
   </div>
   
  </>
    )
}
export default Display;
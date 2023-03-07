import ProfileNav from "../components/profileNav";
import Property from "../components/property";


const Profile=(props)=>{
  const{userprops,handlePropertySearch}=props
    return(
        <div className="profile-page">
          <ProfileNav userprops={userprops} handlePropertySearch={handlePropertySearch}/>
          <div>
           <Property userprops={userprops}/>
           </div>
        </div>
    )
}
 export default Profile
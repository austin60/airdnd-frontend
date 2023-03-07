import {FaAirbnb } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const ProfileNav=(props)=>{
    const{handlePropertySearch}=props
    return(
        <>
        <div className="profile-bar">
          <div className='form-nav'>
            <div><NavLink to="/"style={{color:"black",textDecoration:"none"}}><FaAirbnb className="bar-icon"/></NavLink></div>
            <div className='profile-search'>
              <input type="text" placeholder='search location| title| price' onChange={handlePropertySearch} />
                
            </div>
            </div>
        </div>
        </>
    )
}
export default ProfileNav;
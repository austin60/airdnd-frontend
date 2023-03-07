import {FaAirbnb } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const FormNav=()=>{
    return(
        <>
        <div className="paper">
            <div className='form-nav'>
            <div><NavLink to="/"style={{color:"black",textDecoration:"none"}}><FaAirbnb className="bar-icon"/></NavLink></div>
            <div className='form-info'>
                <div className='info '>Questions?</div>
                <div className='info '>Save & Exit</div>
            </div>
            </div>
        </div>
        </>
    )
}
export default FormNav;
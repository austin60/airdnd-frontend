import { MdLocationOn} from "react-icons/md";
import BottomNav from "../../components/bottomFormNav";

const Pg4=(props)=>{
    return(
        <>
            <div className="page-content">
            <div className="">
             <div className="page4-titles">
              <h1 className="page-content-title"> Where's your place located? </h1>
              <p className="page-content-desc">Your addres is only shared with guests after they have made a reservation </p>
          
             </div>
             <div className="map">
             <div className="location">
               <div className="loc-icon">
                <MdLocationOn className="react-icon"/>
                </div>
                <div className="loc-input">
                <input type="text" className="loc-in" value={props.host_adress} placeholder="Enter your location" name='host_adress' onChange={props.setInput('host_adress')} />
                </div>
            </div>           
            </div>         
            </div>
            </div>
            <BottomNav prevPage={props.prevPage} nextPage={props.nextPage} />
     </>
    )
}
export default Pg4;
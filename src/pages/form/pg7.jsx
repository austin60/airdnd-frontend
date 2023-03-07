import { FaSnowflake,FaWifi,FaTicketAlt,FaBookReader} from "react-icons/fa";
import { RiCarLine} from "react-icons/ri";
import { CgSmartHomeCooker,CgSmartHomeWashMachine,CgScreen} from "react-icons/cg";
import BottomNav from "../../components/bottomFormNav";

const Pg7=(props)=>{
    return(
            <div className="page-content">
              <div className="place-desc">
                <div className="pg-quiz">
                <h1 className="page-content-title">
                  Tell guests what your place has to offer
                </h1>
                </div>
                <div className="place-select">
                <div className="form-element">
                   <input type="checkbox" name="place-desc" value="wifi" id="wifi" onChange={props.sethasToOffer}/>
                    <label htmlFor="wifi">
                       <div className="icon">
                       <FaWifi  className="react-icon"/>
                       </div>
                       <div className="title">
                       Wifi
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="checkbox" name="place-desc" value="tv" id="tv" onChange={props.sethasToOffer}/>
                    <label htmlFor="tv">
                       <div className="icon">
                       <CgScreen className="react-icon"/>
                       </div>
                       <div className="title">
                       TV
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="checkbox" name="place-desc" value="kitchen" id="kitchen" onChange={props.sethasToOffer}/>
                    <label htmlFor="kitchen">
                       <div className="icon">
                       <CgSmartHomeCooker className="react-icon"/>
                       </div>
                       <div className="title">
                       Kitchen
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="checkbox" name="place-desc" value="washer" id="washer" onChange={props.sethasToOffer}/>
                    <label htmlFor="washer">
                       <div className="icon">
                       <CgSmartHomeWashMachine className="react-icon"/>
                       </div>
                       <div className="title">
                       Washer
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="checkbox" name="place-desc" value="free parking" id="parking" onChange={props.sethasToOffer}/>
                    <label htmlFor="parking">
                       <div className="icon">
                       <RiCarLine className="react-icon"/>
                       </div>
                       <div className="title">
                       Free parking on premises
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="checkbox" name="place-desc" value="paid parking" id="paid-parking" onChange={props.sethasToOffer}/>
                    <label htmlFor="paid-parking">
                       <div className="icon">
                       <FaTicketAlt className="react-icon"/>
                       </div>
                       <div className="title">
                       Paid parking on premises
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="checkbox" name="place-desc" value="air conditioning" id="air-con" onChange={props.sethasToOffer}/>
                    <label htmlFor="air-con">
                       <div className="icon">
                       <FaSnowflake className="react-icon"/>
                       </div>
                       <div className="title">
                       Air conditioning
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="checkbox" name="place-desc" value="work space" id="work-space" onChange={props.sethasToOffer}/>
                    <label htmlFor="work-space">
                       <div className="icon">
                       <FaBookReader className="react-icon"/>
                       </div>
                       <div className="title">
                       Dedicated working space
                       </div>
                    </label>
               </div>
                 
                </div>
                <BottomNav prevPage={props.prevPage} nextPage={props.nextPage} />
              </div>
            </div>
    )
}
export default Pg7;
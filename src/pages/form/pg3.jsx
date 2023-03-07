import { BsDoorClosed, BsHouseDoor } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import BottomNav from "../../components/bottomFormNav";

const Pg3=(props)=>{
    return(
            <div className="page-content">
              <div className="place-desc">
                <div className="pg-q">
                <h1 className="page-content-title">What type of place will the guests have?</h1>
                </div>
                <div className="place-select">

          
               <div className="form-elemento">
                   <input type="radio" name="t-o-place" value="entire place" id="entire" onChange={props.setInput('guest_space_access')} defaultChecked/>
                    <label htmlFor="entire">
                      
                       <div className="space title">
                       <span className="place-title-selec">  An entire place </span>
                       <span className="place-par">
                        Guests have the whole place for themselves
                        </span>
                       </div>
                       <div className="icon">
                       <BsHouseDoor  className="react-icon"/>
                       </div>
                    </label>
               </div>

               <div className="form-elemento">
                   <input type="radio" name="t-o-place" value="private room" id="private" onChange={props.setInput('guest_space_access')} />
                    <label htmlFor="private">
                      
                       <div className="space title">
                       <span className="place-title-selec"> A private room</span>
                       <span className="place-par">
                        Guests sleep in a private room but some areas are 
                        shared with you or others
                       </span>
                       </div>
                       <div className="icon">
                       <BsDoorClosed className="react-icon"/>
                       </div>
                    </label>
               </div>

               <div className="form-elemento">
                   <input type="radio" name="t-o-place" value="shared room" id="shared" onChange={props.setInput('guest_space_access')} />
                    <label htmlFor="shared">
                      
                       <div className="space title">
                       <span className="place-title-selec">  A shared room</span>
                       <span className="place-par">
                        Guests sleep in a private room but some areas are 
                        shared with you or others
                       </span>
                       </div>
                       <div className="icon">
                       <GrGroup className="react-icon"/>
                       </div>
                    </label>
               </div>
            
                
                </div>
                <BottomNav prevPage={props.prevPage} nextPage={props.nextPage} />
              </div>
            </div>
    )
}
export default Pg3;
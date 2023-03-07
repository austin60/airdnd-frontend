import { BsInfoCircle } from "react-icons/bs";
import BottomNav from "../../components/bottomFormNav";

const pg12=(props)=>{
    return (
   <>
    <div className="page-content">
    <div className="last-step">
    <h1 className="page-content-title"> Just one last step!</h1>
      <div className="last-steps">
      <div>
      <div className="hostypes-q"><b>How are you hosting on Airdnd? </b><BsInfoCircle className="react-icon"/></div>
        <div className="host-types">
           <label htmlFor="" className="host-type">
            <label className="custom-radio-btn">
              <input type="radio" name="host_type" value="as a private individual"  onChange={props.setInput('host_type')} defaultChecked/>
              <span className="checkmark"></span>
            </label> 
             <span className="page-content-desc">
               I'm hosting as a private individual
             </span>
           </label>
           <label htmlFor="" className="host-type">
             <label className="custom-radio-btn">
              <input type="radio" name="host_type" value="as a business" onChange={props.setInput('host_type')}/>
              <span className="checkmark"></span>
             </label>
             <span className="page-content-desc">
               I'm hosting as a business
             </span>
           </label>
        </div>
      </div>
      <div>
      <div className="ntk-q"><b> Does your place have any of these?</b>  <BsInfoCircle className="react-icon"/></div> 
        <div className="ntk">
         <label htmlFor="" className="ntks">
          <span className="page-content-desc">
            Security camera(s)
          </span>
           <label className="check-container">
           <input type="checkbox" value="security camera"  onChange={props.setAnyof}/>
           <span className="check-mark"></span>
           </label>
         </label>
         <label htmlFor="" className="ntks">
          <span className="page-content-desc">
            Weapons
          </span>
          <label className="check-container">
           <input type="checkbox" value="weapons" onChange={props.setAnyof} />
           <span className="check-mark"></span>
           </label>
         </label>
           <label htmlFor="" className="ntks">
          <span className="page-content-desc">
            Dangerous animals
          </span>
          <label className="check-container">
           <input type="checkbox" value="dangerous animals"  onChange={props.setAnyof}  />
           <span className="check-mark"></span>
           </label>
         </label>
        </div>
       
      </div>
      </div>
      </div>
    </div>
    <BottomNav prevPage={props.prevPage} nextPage={props.nextPage}/>
    </>
    )
}
export default pg12;
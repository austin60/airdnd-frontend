import BottomNav from "../../components/bottomFormNav";


const Pg10=(props)=>{
    return(
      <>
            <div className="page-content">
              <div className="place-desc">

                <div>
                <h1 className="page-content-title">
                    Choose who to welcome for your first reservation
                  </h1>
                  <p className="page-content-desc">
                    After your first guest, anyone can book your place.
                  </p>
                 </div>
                
            <div>
                 <label htmlFor="" className="guest-type">
                   <label className="custom-radio-btn">
                     <input type="radio" name="guest_type" value="any guest" onChange={props.setInput('guest_type')} defaultChecked/>
                     <span className="checkmark"></span>
                   </label>

                       <span className="space">
                       <span className="place-title-selec">
                             Any Airdnd guest
                         </span>
                         <span  className="place-par">
                             Guests reservation faster when you welcome anyone from the Airdnd community.
                         </span>
                       </span>
                </label>

                <label htmlFor="" className="guest-type">
                   <label className="custom-radio-btn">
                     <input type="radio" name="guest_type" value="expirienced guest" onChange={props.setInput('guest_type')}/>
                     <span className="checkmark"></span>
                   </label>

                       <span className="space">
                      <span className="place-title-selec">
                      An expirienced guest
                       </span> 
                             
                        
                         <span  className="place-par">
                             For your first guest,welcome someone with a good track record on Airdnd can 
                             offer tips 
                         </span>
                       </span>
                    </label>

                </div>
              </div>  
            </div>
            <BottomNav prevPage={props.prevPage} nextPage={props.nextPage} />
       </>
    )
}
export default Pg10;
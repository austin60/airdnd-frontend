import BottomNav from "../../components/bottomFormNav";

const Pg5=(props)=>{
    const{street,apt,state,city, zip_code,country,setInput}=props
    return(
        <>
            <div className="page-content">
            <div className="">
             <div className="page4-titles">
              <h1 className="page-content-title"> Where's your place located? </h1>
              <p className="page-content-desc">
                  Your addres is only shared with guests after they have made a reservation
              </p>
              </div>
             <div className="form">
                <input type="text" placeholder="street" name='street' value={street}  onChange={setInput('street')}/>
                <input type="text" placeholder="Apt, suite, etc.(Optional)" name="apt" value={apt} onChange={setInput('apt')} />
                <input type="text" placeholder="City" name="city" value={city} onChange={setInput('city')} />
                <input type="text" placeholder="State (Optional)" name="state" value={state} onChange={setInput('state')} />
                <input type="text" placeholder="Zip Code (Optional)" name="zip_code" value={zip_code} onChange={setInput('zip_code')}/>
                <select name="country" id="country"  placeholder="Country/Region" value={country} onChange={setInput('country')} >
                  <option value="Kenya">Kenya</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Rwanda">Rwanda</option>
                 </select>
            </div>
            
            </div>
            </div>
            <BottomNav prevPage={props.prevPage} nextPage={props.nextPage} />
    </>
    )
}
export default Pg5;
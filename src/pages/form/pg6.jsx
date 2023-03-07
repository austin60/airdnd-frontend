import BottomNav from "../../components/bottomFormNav";

const Pg6=(props)=>{
  const{guests,beds,bedrooms,bathrooms,decItems,incItems}=props
    return(
      <>
            <div className="page-content">
            <div className="basics-page">
              <div className="page4-titles">
              <h1 className="page-content-title"> Share some basics about your place </h1>
              <p className="page-content-desc">You'll add more details later, like bed types.</p>
              </div>

             <div className="basics">
              <ul>
                <li>
                    <span>Guests</span>
                     <div className="basic-btns">
                        <button className="basic-btn" value={guests} onClick={decItems('guests')}>-</button>
                         {guests}
                        <button className="basic-btn" value={guests} onClick={incItems('guests')}>+</button>
                        
                     </div>
                </li><hr className="basic-hr"/>

                <li>
                    <span>Beds</span>
                    <div className="basic-btns">
                    <button className="basic-btn" value={beds} onClick={decItems('beds')}>-</button>
                       {beds}
                    <button className="basic-btn" value={beds} onClick={incItems('beds')}>+</button>
                    </div>
                </li><hr className="basic-hr"/>

                <li><span>Bedrooms</span>
                   <div className="basic-btns">
                   <button className="basic-btn" value={bedrooms} onClick={decItems('bedrooms')}>-</button>
                      {bedrooms}
                   <button className="basic-btn" value={bedrooms} onClick={incItems('bedrooms')}>+</button>
                    </div>
                </li><hr className="basic-hr"/>

                <li><span>Bathrooms</span>
                <div className="basic-btns">
                  <button className="basic-btn" value={bathrooms} onClick={decItems('bathrooms')}>-</button>
                     {bathrooms}
                  <button className="basic-btn" value={bathrooms} onClick={incItems('bathrooms')}>+</button>
                     </div>
                </li>
              </ul>
            </div>
           
            </div>      
            </div>
            <BottomNav prevPage={props.prevPage} nextPage={props.nextPage} />
       </>
    )
}
export default Pg6;
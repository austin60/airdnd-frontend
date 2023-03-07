import { BsInfoCircle } from "react-icons/bs";
import BottomNav from "../../components/bottomFormNav";

const Pg11=(props)=>{
  const{price}=props
    return(
      <>
            <div className="page-content">
               <div className="price-page">
                  <div className="price-intro">
                  <h1 className="page-content-title">
                      Now, set your price
                  </h1>
                    <p className="page-content-desc">  You can change it anytime. </p>
                  </div>
                  <div className="price-counter">
                    <div className="counter">
                       <button value={price} onClick={props.decItems('price')}>-</button>
                       <div className="price-input"> 
                          <p >
                            ${price}
                          </p>
                       </div>
                       <button value={price} onClick={props.incItems('price')}>+</button>
                    </div>
                    <div className="charge">  
                        per night
                    </div>
                    <div className="charge-range">  
                      <p className="charge-ad">
                        places like yours in your area usually range from 30$ to 50$ <BsInfoCircle className="react-icon"/>
                      </p>
                    </div>
                  </div>
                 
               </div>
            </div>
            <BottomNav prevPage={props.prevPage} nextPage={props.nextPage} />
          </>
    )
}
export default Pg11;
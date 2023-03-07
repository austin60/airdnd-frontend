import {BsHouseDoor} from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { GiBarn } from "react-icons/gi";
import { MdCabin,MdOutlineVilla} from "react-icons/md";
import { TbCaravan,TbBuildingCastle,TbSailboat,TbCoffee } from "react-icons/tb";
import BottomNav from "../../components/bottomFormNav";

const Pg2=(props)=>{
   const{setInput,prevPage,nextPage}=props;
    return(
            <div className="page-content">
              <div className="place-desc">
                <div className="pg-quiz">
                <h1 className="page-content-title"> Which of these best describes your place? </h1>
                </div>
                <div className="place-select">
                <div className="form-element">
                   <input type="radio" name="place_desc" value="house" id="house" onChange={setInput('place_desc')} defaultChecked/>
                    <label htmlFor="house">
                       <div className="icon">
                          <BsHouseDoor className="react-icon"/>
                       </div>
                       <div className="title">
                          House
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="radio" name="place_desc" value="apartment" id="apartment"  onChange={setInput('place_desc')}/>
                    <label htmlFor="apartment">
                       <div className="icon">
                         <BiBuildingHouse className="react-icon"/>
                       </div>
                       <div className="title">
                          Apartment
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="radio" name="place_desc" value="bed&breakfast" id="bed&breakfast" onChange={setInput('place_desc')}/>
                    <label htmlFor="bed&breakfast">
                       <div className="icon">
                       <TbCoffee className="react-icon"/>
                       </div>
                       <div className="title">
                         Bed & breakfast
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="radio" name="place_desc" value="boat" id="boat" onChange={setInput('place_desc')}/>
                    <label htmlFor="boat">
                       <div className="icon">
                       <TbSailboat className="react-icon"/>
                       </div>
                       <div className="title">
                       Boat
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="radio" name="place_desc" value=" barn" id="barn" onChange={setInput('place_desc')} />
                    <label htmlFor="barn">
                       <div className="icon">
                       <GiBarn className="react-icon"/>
                       </div>
                       <div className="title">
                       Barn
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="radio" name="place_desc" value=" cabin" id="cabin" onChange={setInput('place_desc')}/>
                    <label htmlFor="cabin">
                       <div className="icon">
                       <MdCabin className="react-icon"/>
                       </div>
                       <div className="title">
                       Cabin
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="radio" name="place_desc" value=" camper" id="camper" onChange={setInput('place_desc')}/>
                    <label htmlFor="camper">
                       <div className="icon">
                       <TbCaravan className="react-icon"/>
                       </div>
                       <div className="title">
                       Camper/RV
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="radio" name="place_desc" value="casa particular" id="casa particular" onChange={setInput('place_desc')}/>
                    <label htmlFor="casa particular">
                       <div className="icon">
                       <MdOutlineVilla className="react-icon"/>
                       </div>
                       <div className="title">
                       Casa particular
                       </div>
                    </label>
               </div>
               <div className="form-element">
                   <input type="radio" name="place_desc" value="castle" id="castle" onChange={setInput('place_desc')}/>
                    <label htmlFor="castle">
                       <div className="icon">
                       <TbBuildingCastle className="react-icon"/>
                       </div>
                       <div className="title">
                       Castle
                       </div>
                    </label>
               </div>           
                </div>
                <BottomNav prevPage={prevPage} nextPage={nextPage} />
              </div>     
            </div>
           
    )
}
export default Pg2;
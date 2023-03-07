import { BsPeace } from "react-icons/bs";
import { TbBuildingLighthouse } from "react-icons/tb";
import { MdFamilyRestroom, MdOutlineLocationOn,MdHouse } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import BottomNav from "../../components/bottomFormNav";

const Pg9=(props)=>{
    return(
      <>
            <div className="page-content">
              <div className="place-sel">
                <div className="apart-intro">
                <h1 className="page-content-title">
                 Next, let's describe your apartment
                </h1> 
                <p className="page-content-desc">
                 Choose upto 2 highlights. We'll use these to get your description started.
                </p>
                </div>
                <div className="desc-select">
                <div className="form-elements">
                   <input type="checkbox" name="place" value="peaceful" id="castle" onChange={props.setApDesc}/>
                    <label htmlFor="castle">
                       <div className="icon">
                       <BsPeace className="react-icon"/>
                       </div>
                       <div className="title">
                       Peaceful
                       </div>
                    </label>
               </div>
               <div className="form-elements">
                   <input type="checkbox" name="place" value="unique" id="unique" onChange={props.setApDesc}/>
                    <label htmlFor="unique">
                       <div className="icon">
                       <TbBuildingLighthouse className="react-icon"/>
                       </div>
                       <div className="title">
                       Unique
                       </div>
                    </label>
               </div>
               <div className="form-elements">
                   <input type="checkbox" name="place" value="family-friendly" id="family-friendly" onChange={props.setApDesc}/>
                    <label htmlFor="family-friendly" >
                       <div className="icon">
                       <MdFamilyRestroom className="react-icon"/>
                       </div>
                       <div className="title">
                       Family-friendly
                       </div>
                    </label>
               </div>
               <div className="form-elements">
                   <input type="checkbox" name="place" value="stylish" id="stylish" onChange={props.setApDesc}/>
                    <label htmlFor="stylish">
                       <div className="icon">
                       <MdHouse className="react-icon"/>
                       </div>
                       <div className="title">
                       Stylish
                       </div>
                    </label>
               </div>
               <div className="form-elements">
                   <input type="checkbox" name="place" value="central" id="central" onChange={props.setApDesc}/>
                    <label htmlFor="central">
                       <div className="icon">
                       <MdOutlineLocationOn className="react-icon"/>
                       </div>
                       <div className="title">
                       Central
                       </div>
                    </label>
               </div>
               <div className="form-elements ">
                   <input type="checkbox" name="place" value="spacious" id="spacious" onChange={props.setApDesc}/>
                    <label htmlFor="spacious" >
                       <div className="icon">
                       <GrGroup className="react-icon"/>
                       </div>
                       <div className="title">
                       Spacious
                       </div>
                    </label>
               </div>

                </div>
                
              </div>
            </div>
            <BottomNav prevPage={props.prevPage} nextPage={props.nextPage} />
    </>
    )
}
export default Pg9;
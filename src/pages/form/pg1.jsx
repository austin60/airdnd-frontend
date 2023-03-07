import InitNav from "../../components/initBottomNav";
const Pg1=(props)=>{
    return(
        <>
            <div className="page-content">
            <div className="text">
            <div>
              <h3>
               Step 1
              </h3>
              <h2 className="intro-title">
               Tell us about your place
              </h2>
              <p className="page-content-desc">
                  In this step we'll ask you which type of property do you have and if guests will book the entire place 
                  or just one room. Then let u know your location and how many guets can stay.
              </p>
             </div>
            </div>
            <div className="pg1-img">
               <img src="https://www.hpdconsult.com/wp-content/uploads/2019/05/best-modern-house-design-Floor-Plans-5.jpg" alt="home" />
            </div>
            </div>
            <InitNav nextPage={props.nextPage}/>
        </>
    )
}
export default Pg1;
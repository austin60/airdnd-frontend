import BottomNav from "../../components/bottomFormNav";

const Pg8=(props)=>{
    return(
        <>
            <div className="page-content">
              <div className="place-desc">
                <div>
                <h1 className="page-content-title">Now, let's give your apartment a title  </h1>
                <p className="page-content-desc">
                 Short titles work best. Have fun with it - you can always change it later.
                </p>
                </div>
                    <textarea  className="apart-title" value={props.apartment_title} name="apartment_title" onChange={props.setInput('apartment_title')}></textarea>
                
              </div>
            </div>
            <BottomNav prevPage={props.prevPage} nextPage={props.nextPage} />
     </>
    )
}
export default Pg8;
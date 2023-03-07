import BottomNav from "../../components/bottomFormNav";

const Pg13=(props)=>{
    return(
        <>
            <div className="page-content">
              <div className="place-desc">
                <div>
                <h1 className="page-content-title">
                Almost there !
                </h1>
                <p className="page-content-desc">
                 Create a termination policy incase of reservation cancellation.
                </p>
                </div>
                    <textarea  className="apart-title" value={props.canc_policy} name="canc_policy" onChange={props.setInput('canc_policy')}></textarea>
                
              </div>
            </div>
            <BottomNav prevPage={props.prevPage} nextPage={props.nextPage} />
            </>
    )
}
export default Pg13;
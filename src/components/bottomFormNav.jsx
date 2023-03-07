const BottomNav=(props)=>{
    return(
        <div className="bott nav">
           <div className="init">
               <button className="back init btn" onClick={props.prevPage}>Back</button>
           </div>
           <div className="init">
               <button className="next btn" onClick={props.nextPage}><b>Next</b></button>
           </div>
        </div>
    )

}
export default BottomNav
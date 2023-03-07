const InitNav=(props)=>{
    return(
        <div className="init nav">
           <div >
               <button className="set btn" onClick={props.nextPage}><b>Set Up Airdnd</b></button>
           </div>
        </div>
    )

}
export default InitNav;
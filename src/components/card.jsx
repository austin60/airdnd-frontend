import { Link } from "react-router-dom";

const Card=(props)=>{
 
    return(
      <>
      {
        props.data<1?<div>Loading...</div>:props.data.map(data=>(<div key={data._id} className="image-card">
          <Link to={`/${data._id}`}>
         <img src={data.files} alt="house" />
         </Link>
         <div className="card-info">
          <div>
          <p><b>{data.host_adress},{data.country}</b></p>
          </div>
          <p>${data.price} night</p>
         </div>
      </div>))}
      
      </>
      
        
    )
}

export default Card;
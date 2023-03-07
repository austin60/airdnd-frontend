
const Property=(props)=>{
    const{userprops}=props
    return(
        <>
       {userprops.length<1?<div>Loading info...</div>:userprops.map(userprop=>(<div key={userprop._id} className="property">
           
            <div className="property-info">
            <li> {userprop.city} </li>
            <li> {userprop.apartment_title}</li>
            <li>{userprop.price}</li>
            <li> Available</li>
            </div>
            <div className="property-manager">
                <button className="upd">Update</button>
                <button className="del">Delete</button>
            </div>
        </div>))}
        </>
    )
}
export default  Property;
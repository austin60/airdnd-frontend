//import AppBar from "../components/appbar"
import React, { useState,useEffect, useRef} from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Calendar from 'react-calendar';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const AirdndDetail=(props)=>{
    const {incItems,decItems,adults,children,infants,pets,makeReservation}=props;
    const [toggle, setToggle] = useState(false);
    const [toggleFdate, setFdate] = useState(false);
    const {airdndId}=useParams();
    const [idata,setIdata]=useState([])
    const [date, setDate] = useState(new Date());
    const [date1,setDate1]=useState("");
    const [date2,setDate2]=useState("");
    const [dateDiff,setDateDiff]=useState(0)
   
   

    let calenderRef=useRef();

    const onChange=date=>{
      setDate(date);
      const arr1=date[0].toLocaleString().split(',');
      const fdate=arr1[0].toString();
      const arr2=date[1].toLocaleString().split(',');
      const sdate=arr2[0].toString();
      setDate1(fdate);
      setDate2(sdate);
     // console.log(date1,date2)
      const dif=((date[1]-date[0])/(1000*60*60*24))
      setDateDiff(Math.trunc(dif))
    }
  
    const propagation=(e)=>{
      e.stopPropagation();
    }

   //get individual airdnd data
    const getData=()=>{
      axios.get(`airdnd/${airdndId}`)
      .then(res=>{
        setIdata(res.data);
       // console.log(idata);
         })
      .catch(err=>{console.log(err)});
  }

  //close calendar if click outside
   const randomClick=()=>{
    /* document.addEventListener('mousedown',(e)=>{
        if(!calenderRef.current.contains(e.target)){
          setFdate(false)
        }
     })*/
     console.log("cow")
   }
 
    useEffect(() => {
     //close calendar if click outside
     randomClick();

     //get individual airdnd data
     getData();
    });
    return(
      <>
       {idata.length===0?"details loading...":( <div className="display-page" >
         
            <div className="images-detail">
              <div className='img1'>
              <img src={idata.files}  alt="" />
              </div>
              <div className='imggrp'>
                 <img src="" alt="" />
                 <img src="" alt="" className='top-right-img'/>
                 <img src=""  alt="" />
                 <img src=""alt="" className='bottom-right-img'/>
              </div>
            </div>
            <div className="typo-detail">
                 <div className="about-airdnd">
                    <div className="detail-intro">
                    <h1 className="page-content-title">Entire {idata.place_desc} is hosted by {props.user.f}</h1>
                    <p className="page-content-desc">{idata.guests} guests.{idata.bedrooms} bedrooms.{idata.beds} beds.{idata.bathrooms} baths</p>
                    </div>
                    <hr/>
                    <div className="aircover detail-info">
                        <h2 className='aircover-title' ><span className="color aircover-title">air</span ><span className='aircover-title'>cover</span></h2>
                        <p className="page-content-desc">Every booking includes free protection from Host cancellations, listing inaccuracies,
                         and other issues like trouble checking in.</p>
                    </div>
                    <hr/>
                    <div className="apartment-title detail-info">
                       <p className="page-content-desc">{idata.apartment_title}</p> 
                    </div>
                   
                    <div className="has-to-offer detail-info">

                    </div>
                 </div>
                 <div className="reservation-detail">
                     <div className="reservation-card">
                        <div className="reserv-nums">
                            <span className="reserv-price page-content-desc"><b>${idata.price}</b> night</span>
                            <span className="reserv-rating page-content-desc">4.95.<u className="gray">{20} reviews</u></span>
                        </div>
                        <div className="reserv-data">
                            <div className="reserv-date" onClick={() => setFdate(!toggleFdate)}>
                           <div className="first-date-calender" ref={calenderRef} onClick={propagation} >
                           {toggleFdate && ( <Calendar onChange={onChange} minDate={new Date()} selectRange={true} value={date} showDoubleView />)}
                           </div>
                              <div className="first-date"  >
                                <p className="page-content-desc">CHECK-IN</p>
                                {date1}
                              </div>
                              <div className="last-date">
                                <p className="page-content-desc">CHECKOUT</p>
                                {date2}
                              </div>
                            </div>
                            <div className="reserv-guest-data">
                            <div className="guest-text "  onClick={() => setToggle(!toggle)}>
                              <div> <span className="page-content-desc" >GUESTS</span><p className="page-content-desc">{2} guest(s)</p></div> 
                              <div >< MdOutlineKeyboardArrowDown size={25}/></div>
                            </div>
             { toggle && ( <div className="guest-info" id="guest-info" >
                    
                  
                  <li>
                      <div className="guest-grp"><span>Adults</span> <span className="guest-desc">Age 13+</span></div>
                       <div className="basic-btns">
                         <button className="basic-btn" value={adults } onClick={decItems('adults')}>-</button>
                          {" "}{adults}{" "}
                         <button className="basic-btn" value={adults } onClick={incItems('adults')}>+</button>
                       </div>
                    </li>
                    <li>
                      <div className="guest-grp"><span>Children</span> <span className="guest-desc">Ages 2-12+</span></div>
                       <div className="basic-btns">
                         <button className="basic-btn" value={children} onClick={decItems('children')}>-</button>
                         {" "}{children}{" "}
                         <button className="basic-btn" value={children} onClick={incItems('children')}>+</button>
                       </div>
                    </li>
                    <li>
                      <div className="guest-grp"><span>Infants</span> <span className="guest-desc">Under 2</span></div>
                       <div className="basic-btns">
                         <button className="basic-btn" value={infants} onClick={decItems('infants')}>-</button>
                         {" "}{infants}{" "}
                         <button className="basic-btn" value={infants} onClick={incItems('infants')}>+</button>
                       </div>
                    </li>
                    <li>
                      <div className="guest-grp"><span>Pets</span> <span className="guest-desc">Under 2</span></div>
                       <div className="basic-btns">
                         <button className="basic-btn" value={pets} onClick={decItems('pets')}>-</button>
                         {" "}{pets}{" "}
                         <button className="basic-btn" value={pets} onClick={incItems('pets')}>+</button>
                       </div>
                    </li>
               <p className="reserv-extra" >This place has a maximum of {idata.guests} guests,not including infants</p>
              </div>)}
                            </div>
                           
                        </div>
                        <button className="avail-btn" onClick={makeReservation(idata._id,date1,date2,dateDiff,(idata.price*dateDiff))}>Reserve</button>
                      {dateDiff===0?"":( <div className="reservation-cost">
                        <div className="charges">
                          <div className="charge-rates page-content-desc">${idata.price} x {dateDiff} nights</div>
                          <div className="charge-total">${idata.price*dateDiff}</div>
                        </div>
                        <div className="total">
                          <div className="total-title">Total</div>
                          <div className="total-cost">${idata.price*dateDiff}</div>
                        </div>
                        </div>)}
                     </div>
                 </div>
            </div>
            
        </div>)}
        </>
    )
}
export default AirdndDetail
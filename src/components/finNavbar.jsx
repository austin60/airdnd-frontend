import { ToastContainer /*, toast*/ } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FinNav=(props)=>{
   // const notify = () => toast("Set Up complete!");
    return(
        <div className="bott nav">
           <div className='init'>
               <button className="back btn" onClick={props.prevPage}>Back</button>
           </div>
           <div className='init' >
               <button className="next btn" onClick={props.finish}><b>Finish</b></button>
               <ToastContainer />
           </div>
        </div>
    )

}
export default FinNav;
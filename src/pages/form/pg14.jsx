import FinNav from "../../components/finNavbar";
import FileBase from 'react-file-base64';

const pg14=(props)=>{
  // const notify = () => toast("Wow so easy!");
    return (
      <>
    <div className="page-content">
    <div className="image-page">
      <div className="page4-titles">
   
              <h1 className="page-content-title">
               Let's finish this
              </h1>
              <p className="page-content-desc">
                Upload photos of your space so potential guests can see
              </p>
          
             </div>
    <div className="image-display"></div>
    <FileBase type='file' multiple={false} onDone={props.getFiles} />
    <p id="notification"></p>
    </div>
    
    </div>
    <FinNav prevPage={props.prevPage}  finish={props.finish}/>
    </>
    )
}
export default pg14;
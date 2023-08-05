import React from "react";
import Logistic from './Assets/image-3.png'
function Logistics() {
  return (
    <>
    <div className="homebg" style={{height:"auto"}}>
<h1 className="header"style={{color:"white"}}>Deeplogics Logistics</h1>
</div>
<br/>

<div className="container" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
   <div className="row">
       <img src={Logistic} style={{height:"400px",width:"auto"}} alt='Energy' className="col-lg"/>
       <div className="col-lg" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       <h2 className="lean">TRANSFORMING PROJECTS INTO RESULTS</h2>
       <h4 className="bold">Project Management Office</h4>
       <p className="con">We provide PMP Certified Professionals to outsource any Enterprise project in all market segments

       <br/><br/>We have a proven track record in Manufacturing, Pharmaceutical, Supply Chain Distribution, Healthcare, Finance Industry and Government Agencies
       <br/><br/>We can train and help certify customer internal personnel to comply with the industry standards and best practices
       <br/><br/>We follow PMI guidelines and certification requirements
       </p>
       </div>
   </div>
</div>
<br/>

</>
  );
}

export default Logistics;
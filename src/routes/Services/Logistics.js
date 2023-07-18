import React from "react";
import Logistic from './image-3.png'
function Logistics() {
  return (
    <>
    <div className="homebg" style={{height:"auto"}}>
<h1 className="header"style={{color:"white"}}>Deeplogics Logistics</h1>
</div>
<div className="container-fluid "> 
   <div className="row">
       <img src={Logistic} style={{margin:"auto",top:"0",height:"250px",width:"500px"}} alt='Energy' className="col-lg"/>
       <div className="col-lg">
       <h5 className="lean">TRANSFORMING PROJECTS INTO RESULTS</h5>
       <h6 className="bold">Project Management Office</h6>
       <p className="con">We provide PMP Certified Professionals to outsource any Enterprise project in all market segments

       <br/><br/>We have a proven track record in Manufacturing, Pharmaceutical, Supply Chain Distribution, Healthcare, Finance Industry and Government Agencies
       <br/><br/>We can train and help certify customer internal personnel to comply with the industry standards and best practices
       <br/><br/>We follow PMI guidelines and certification requirements
       </p>
       </div>
   </div>
</div>

</>
  );
}

export default Logistics;
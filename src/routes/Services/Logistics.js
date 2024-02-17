import React from "react";
import Logistic from './Assets/image-3.png';
import homebg from './Assets/Firefly.png';



function Logistics() {
  return (
    <>
    <div className="cybersecurity-bg">
        <div className="header-container">
          <h1 className="header">Deeplogics Logistics</h1>
        </div>
        <img className="homebg" src={homebg} alt="banner" />
      </div>
<br/>

<div className="container" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
   <div className="row">
   <div className="col-lg p-4">
   <div className="image-container">
       <img src={Logistic} alt='Logistics' className="responsive-image"/>
       </div>
       </div>
       <div className="col-lg" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       <h2 className="lean">TRANSFORMING PROJECTS INTO RESULTS</h2>
       <h4 className="bold">Project Management Office</h4>
       <p className="con">We provide PMP Certified Professionals to outsource any Enterprise project in all market segments.

       <br/><br/>We have a proven track record in Manufacturing, Pharmaceutical, Supply Chain Distribution, Healthcare, Finance Industry and Government Agencies.
       <br/><br/>We can train and help certify customer internal personnel to comply with the industry standards and best practices.
       <br/><br/>We follow PMI guidelines and certification requirements.
       </p>
       </div>
   </div>
</div>
<br/>

</>
  );
}

export default Logistics;
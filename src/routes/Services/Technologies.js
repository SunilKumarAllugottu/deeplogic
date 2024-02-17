import React from "react";
import tech from './Assets/connected-city.jpg';
import homebg from './Assets/Firefly.png';


function Technologies() {
  return (
    <>
    <div className="cybersecurity-bg">
        <div className="header-container">
          <h1 className="header">Deeplogics Technologies</h1>
        </div>
        <img className="homebg" src={homebg} alt="banner" />
      </div> <br/>
<div className="container" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
   <div className="row">
   <div className="col-lg p-4">
   <div className="image-container">
       <img src={tech}  alt='Technologies' style={{borderRadius:'10px'}} className="responsive-image"/>
       </div>
       </div>
      
       <div className="col-lg p-4" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       <h2 className="lean">SPECIAL PROJECTS</h2>
       <h4 className="bold">Deep Technologies Services</h4>
       <p className="con">BIDGO – BID GO is an Uber like application available worldwide for partners and investor capital, kicking out in 2023

       <br/><br/> MTM – Mobile Thru Mobile is an application like Pay-Pal available worldwide for investor capital, kicking out in 2022
                
       <br/><br/>EHMR – Electronic Medical Health Record is a new application available for Hospitals and Outpatient Clinics and Physician Offices, kicking out in 2022.
                
       <br/><br/> 3D printing produces parts additively, layer by layer, using materials that are processed from one form to another to create the printed part. This processing may introduce variables, such as material shrinkage, that must be compensated for during the print process to ensure final part accuracy.
                
       <br/><br/>Powder-based 3D printers using binders typically have the least shrink distortion attributable to the print process and are generally highly accurate.
                
       <br/><br/>Plastic 3D printing technologies typically use heat and/or UV light as energy sources to process the print materials, adding additional variables that can impact accuracy
                
       <br/><br/>We have vast experience establishing project management centers of excellence.
       </p>
       </div>
   </div>
</div>
<br/>

</>
  );
}

export default Technologies;
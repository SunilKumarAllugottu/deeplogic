import React from "react";
import Ene from "./Assets/image-1.png" 
import homebg from '../Assets/Firefly.png';

function Energy() {
  return (
    <>
    <div className="cybersecurity-bg">
        <div className="header-container">
          <h1 className="header">Deeplogics Energy</h1>
        </div>
        <img className="homebg" src={homebg} alt="banner" />
      </div>
<br/>
<div className="container" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
   <div className="row">
       <img src={Ene} style={{margin:"auto",top:"0",height:"250px",width:"500px"}} alt='Energy' className="col-lg"/>
       <div className="col-lg" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       <h2 className="lean">Deeplogics Energy</h2>
       <h4 className="bold">Why is the Deeplogics Energy?</h4>
       <p className="con">Deeplogics offers a diverse renewable portfolio of solutions in solar, wind, biomass, and waste-to-energy with synthetic diesel, oil, and gas.

       <br/> <br/>We are aligned with technology partners and late-stage investors that provide deep capital for all enterprise high-end projects in construction, technology, and utility-scale renewable energy with power purchase agreements worldwide.
        
       <br/><br/>Our investors are open to solid waste, industrial waste, agricultural waste, tire pyrolysis processing, and biofuels.
        
        <br/><br/>We also have a Project Management Office (PMO) to lead in the project implementations and lead the customer to complete success completion in all market segments in the industry.
       </p>
       </div>
   </div>
</div>
<br/>
</>
  );
}

export default Energy;
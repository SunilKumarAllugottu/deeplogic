import React from "react";
import Ene from "./image-1.png" 

function Energy() {
  return (
    <>
    <div className="homebg" style={{height:"auto"}}>
<h1 className="header" style={{color:"white"}}>Deeplogics Energy</h1>
</div>
<div className="container-fluid "> 
   <div className="row">
       <img src={Ene} style={{margin:"auto",top:"0",height:"250px",width:"500px"}} alt='Energy' className="col-lg"/>
       <div className="col-lg">
       <h5 className="lean">Deeplogics Energy</h5>
       <h6 className="bold">Why is the Deeplogics Energy?</h6>
       <p className="con">Deeplogics offers a diverse renewable portfolio of solutions in solar, wind, biomass and waste-to-energy with synthetic diesel, oil and gas.

       <br/> <br/>We are aligned with technology partners and late-stage investors that provide deep capital for all enterprise high end projects in construction, technology and utility scale renewable energy with power purchase agreements worldwide.
        
       <br/><br/>Our investors are open to solid waste, industrial waste, agricultural waste, tire pyrolysis processing and biofuels.
        
        <br/><br/>We also have a Project Management Office (PMO) to lead in the project implementations and lead the customer to a complete success completion in all market segments in the industry.
       </p>
       </div>
   </div>
</div>
</>
  );
}

export default Energy;
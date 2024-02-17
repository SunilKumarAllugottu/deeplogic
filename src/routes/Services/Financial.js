import React from "react";
import fin from './Assets/image-4.png';
import homebg from './Assets/Firefly.png';



function Financial() {
  return (
    <>
    <div className="cybersecurity-bg">
        <div className="header-container">
          <h1 className="header">Deeplogics Financial</h1>
        </div>
        <img className="homebg" src={homebg} alt="banner" />
      </div>
<br/>
<div className="container" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
   <div className="row">
   <div className="col-lg p-4">
   <div className="image-container">
       <img src={fin}  alt='Financial' className="responsive-image"/>
       </div>
       </div>
       <div className="col-lg p-4" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       <h2 className="lean">Deeplogics and Eagle Investments Group Partnerhship</h2>
       <h4 className="bold">CAPITAL INVESTMENT AND COMMERCIAL LOANS FOR</h4>
       <p className="con">1. Retail Stores 2. Office Buildings 3. Industrial / Warehouse 4. Municipal Buildings/Infrastructures 5. Student Housing 6.Tenant improvement programs / green renovations 7. Hospitality 8. Transportation and Roads 9. Real Estate 10. Hospitals 11. Special use properties (data centers, gas stations, convenience stores, refrigerated storage, etc.) 12. Renewable energy with power purchase agreements (wind, solar, geothermal, biomass, etc.) 13.Energy Saving projects 14. Educational Projects

       <br/><br/><h6 className="bold"> What is our focus?</h6>
       <br/> Exclusively seeking projects that generate a long-term, high quality income stream from tenants that are considered “investment grade” by the rating agencies or unrated companies with especially strong financials and fundamentals. Agnostic as to property type
            
       <br/><br/><h6 className="bold">  Investment Size</h6>
      <br/> $1+ million for stand-alone projects. We can do smaller individual transactions that are part of the cookie-cutter platform to deliver the same type of project to the same tenant over and over (i.e. 87 General Stores at $800,000 average per location).
            
      <br/><br/><h6 className="bold">Commodities Trading Division</h6>
       <br/> We can also sell commodities trading from Brasil 1. Sugar 2. Rice 3. Soy 4. Meats (Beef, Chicken, Sea Foods) 5. Oil and Petroleum 6.Gold
       </p>
       </div>
   </div>
</div>
<br/>
</>
  );
}

export default Financial;
import React from "react";
import fin from './image-4.png'
function Finantial() {
  return (
    <>
    <div className="homebg" style={{height:"auto"}}>
<h1 className="header" style={{color:"white"}}>Deeplogics Financial Capital</h1>
</div>
<div className="container-fluid "> 
   <div className="row">
       <img src={fin} style={{margin:"auto",top:"0",height:"250px",width:"500px"}} alt='Energy' className="col-lg"/>
       <div className="col-lg">
       <h5 className="lean">Deeplogics and Eagle Investments Group Partnerhsip</h5>
       <h6 className="bold">CAPITAL INVESTMENT AND COMMERCIAL LOANS FOR</h6>
       <p className="con">1.Retail Stores 2.Office Buildings 3.Industrial / Warehouse 4.Municipal Buildings/Infrastructures 5.Student Housing 6.Tenant improvement programs / green renovations 7.Hospitality 8.Transportation and Roads 9.Real Estate 10.Hospitals 11.Special use properties (data centers, gas stations, convenience stores, refrigerated storage, etc.) 12.Renewable energy with power purchase agreements (wind, solar, geothermal, biomass, etc.) 13.Energy Saving projects 14.Educational Projects

       <br/><br/><h6 className="bold"> What is our focus?</h6>
       <br/> Exclusively seeking projects that generate a long-term, high quality income stream from tenants that are considered “investment grade” by the rating agencies or unrated companies with especially strong financials and fundamentals. Agnostic as to property type
            
       <br/><br/><h6 className="bold">  Investment Size</h6>
      <br/> $1+ million for stand-alone projects. We can do smaller individual transactions that are part of cookie-cutter platform to deliver same type project to same tenant over and over (i.e. 87 General Stores at $800,000 average per location).
            
      <br/><br/><h6 className="bold">Commodities Trading Division</h6>
       <br/> We can also sell commodities trading from Brasil 1.Sugar 2.Rice 3.Soy 4.Meats (Beef, Chicken, Sea Foods) 5.Oil and Petroleum 6.Gold
       </p>
       </div>
   </div>
</div>

</>
  );
}

export default Finantial;
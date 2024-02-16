import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="container-fluid footer" style={{backgroundColor:"#080710",height:"auto",width:"auto"}}>
<div className="row" style={{marginLeft:"30px",marginRight:"30px"}}>
    <div className="col-md-4">
        <p > <Link to="/" className="Deed">DEEPLOGICS</Link></p>
        <p className="text">Deeplogics Labs Corp. 
        With over two decades of IT and security consulting experience, 
        Deeplogics offers dozens of cybersecurity solutions tailored to your company’s
         budget, risk tolerance, and funding stage.</p>
         <div className="Container">
        <div className="row">
          
    <div className="col">
      <Link to={"https://www.facebook.com/login/"}>    <FaFacebook className="icons"/></Link>
    </div>
    <div className="col">
      <Link to={"https://www.instagram.com/accounts/login/"}><FaInstagram className="icons"/></Link>
    
    </div>
    <div className="col"> 
    <Link to={"https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558718_kw.linkedin+login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062141&mcid=6844056167778418689&cid=&gclid=CjwKCAjwh8mlBhB_EiwAsztdBLAjqU_mbhmwOZ4s69SmUI6KZUQKce_7L9FNZU_fNVubERJUzx7TjBoCsOEQAvD_BwE&gclsrc=aw.ds&original_referer=https%3A%2F%2Fwww.google.com%2F"}> 
                  <FaLinkedinIn className="icons" /></Link>
    </div>
    </div>
    </div>
         </div>
    
    <div className="col-md-2">
           <p className="Deep">Technologies</p>
           <p className="text">AI/MI<br></br>
           UX/UI<br></br>
           IOT<br></br>
           IT Consulting<br></br>
           Data Analytics</p>
       </div>

    <div className="col-md-2">
       <p className="Deep">Cloud</p>
        <p className="text">Cloud Consulting<br></br>
          Private Cloud & Hybrid Cloud<br></br>
          Cloud Implementation<br></br>
          Cloud Security<br></br>
          Cloud Managed Services<br></br>
          Cloud LifeCycle Services</p></div>

    <div className="col-md-2">
        <p className="Deep">Security</p>
        <p className="text">Network Security<br></br>
             Endpoint Security<br></br>
             Data Protection and privacy<br></br>
             Cyber Security<br></br>
             Container Security<br></br>
             Business Continuity Solutions</p></div>

    <div className="col-md-2" >
        
        <p className="Deep">Contact Us</p>
        <p className="text">Montecasino 234,Calle Pino,Toa Alta, PR,USA-00953</p>
        <p className="text" >Email: info@deeplogics.com</p>
        <p className="text">Phone: +1 (787)-387-9807</p>
          


         
    
      

          </div>
     </div>            
     </div>
                <div style={{marginLeft:"50px",marginTop:"10px"}}>
                    <h6 style={{fontSize:"12px"}}> © 2007-2023 Deeplogics Labs Corp., All Rights Reserved.</h6>
                </div>
    </>
  )
}

export default Footer
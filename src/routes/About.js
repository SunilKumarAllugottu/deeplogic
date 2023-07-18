import React from "react";
import pic1 from './Assets/2col-cybersecurity-services-fy20.webp'
const AboutUs = () =>{
    return(
        <>
        <div className="homebg" style={{height:"auto"}}>
        <h1 className="header" style={{color:"white"}}>ABOUT US</h1>
      </div>
        <div className="container mt-3"> 
            <div className="row">
                <img src={pic1} style={{height:"300px",width:"300px",margin:"auto",top:"0",}} alt='About Us' className="col-sm-6   p-3"/>
                <div className="col-sm-6  text-white p-3">
                  <h5 className="lean">Timely Service Delivery & Incident Resolutions!!</h5>
                  <h6 className="bold">YOUR CYBERSECURITY PARTNER</h6>
                <p className="con">Deeplogics Labs Corp. With over two decades of I.T and security consulting experience,
                     Deeplogics offers dozens of cybersecurity solutions tailored to your company’s budget,
                      risk tolerance, and funding stage. We take on full lifecycle management of security incidents.
                       We continuously research and develop technology and security solutions based on frontline
                        breach experience.<br/><br/>
                
                     Competitiveness and Quality is what Deeplogics brings to its family of clients when it takes on
                     any assignment. Our vast repertoire of competencies begin from Strategy, Consulting and Value 
                     Analysis that factor in the client´s current and future scenario and then goes on to tailor IT 
                     Solutions and services that meets the clients specific business needs. Deeplogics currently 
                     serves its customers through its global centers in USA and INDIA.
                </p>
                </div>
            </div>
        </div>
        </>);
}
export default AboutUs;

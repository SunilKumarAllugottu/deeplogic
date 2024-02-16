import React from "react";
import pic1 from './Assets/2col-cybersecurity-services-fy20.png';
import homebg from './Assets/Firefly.png';


const AboutUs = () =>{
    return(
        <>
        <div className="cybersecurity-bg">
        <div className="header-container">
          <h1 className="header">About Us</h1>
        </div>
        <img className="homebg" src={homebg} alt="banner" />
      </div>
      <br/>
 
        <div className="container mt-3" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
            <div className="row ">
            <div className="image-container col-lg p-3">
                <img src={pic1} className="responsive-image " alt='About Us'  /> 
            </div>
                <div className="col-lg p-3" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 className="lean">Timely Service Delivery & Incident Resolutions!!</h2>
                  <h4 className="bold">YOUR CYBERSECURITY PARTNER</h4>
                <p className="con">Deeplogics Labs Corp. With over two decades of IT and security consulting experience,
                     Deeplogics offers dozens of cybersecurity solutions tailored to your company’s budget,
                      risk tolerance, and funding stage. We take on full lifecycle management of security incidents.
                       We continuously research and develop technology and security solutions based on frontline
                        breach experience.<br/><br/>
                
                     Competitiveness and Quality are what Deeplogics brings to its family of clients when it takes on
                     any assignment. Our vast repertoire of competencies begins with Strategy, Consulting, and Value 
                     Analysis that factor in the client's current and future scenario and then goes on to tailor IT 
                     Solutions and services that meet the client's specific business needs. Deeplogics currently 
                     serves its customers through its global centers in the INDIA and USA.
                </p>
                </div>
            </div>
        </div>
        <br/>
        </>
        );
}
export default AboutUs;

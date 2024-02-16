import React from "react";
import pic2 from "./Assets/pie chart.png"
import homebg from "./Assets/Firefly.png"

function Cybersecurity() {
  return (
    <div className="Cybersecurity">
     <div className="cybersecurity-bg">
        <div className="header-container">
          <h1 className="header">Cybersecurity Solutions</h1>
        </div>
        <img className="homebg" src={homebg} alt="banner" />
      </div>
      <br/>
      <div className="container mt-3" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
            <div className="row">
            <div className="image-container col-lg p-3">
                <img src={pic2}  alt='cybersecurity' className=" responsive-image"></img>
            </div>
                <div className="col-lg  p-3" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h1 className="lean">INDUSTRY OVERVIEW</h1>
                  <h3 className="bold">What is Cybersecurity?</h3>
                <p className="con">Cyber security refers to every aspect of protecting an organization and its employees and assets against cyber threats. As cyberattacks become more common and sophisticated and corporate networks grow more complex, a variety of cyber security solutions are required to mitigate corporate cyber risk.:<br/><br/>

                Achieving Comprehensive Cybersecurity with Check Point A modern cybersecurity infrastructure is 
                consolidated and built from solutions that are designed to work together. This requires 
                partnering with a security provider with experience in protecting all of an organization’s assets 
                against a range of cyber threats.<br/><br/>

                The Different Types of Cybersecurity, Cybersecurity is a wide field covering several disciplines. 
                It can be divided into seven main pillars:<br/> 1. Network Security Most attacks occur over the network, 
                and network security solutions are designed to identify and block these attacks. These solutions 
                include data and access controls such as Data Loss Prevention (DLP), IAM (Identity Access Management),
                 NAC (Network Access Control), and NGFW (Next-Generation Firewall) application controls to enforce
                  safe web use policies. Advanced and multi-layered network threat prevention technologies include
                   IPS (Intrusion Prevention System), NGAV (Next-Gen Antivirus), Sandboxing, and 
                   CDR (Content Disarm and Reconstruction). Also important are network analytics, threat hunting,
                    and automated SOAR (Security Orchestration and Response) technologies. 
                    <br/>2. Cloud Security As organizations increasingly adopt cloud computing, securing the cloud
                    becomes a major priority. A cloud security strategy includes cyber security solutions,
                    controls, policies, and services that help to protect an organization’s entire cloud deployment
                   (applications, data, infrastructure, etc.) against attack. While many cloud providers offer
                    security solutions, these are often inadequate for the task of achieving enterprise-grade
                     security in the cloud. Supplementary third-party solutions are necessary to protect
                      against data breaches and targeted attacks in cloud environments.<br/> 3. Endpoint Security
                       The zero-trust security model prescribes creating micro-segments around data wherever 
                       it may be. One way to do that with a mobile workforce is using endpoint security.
                        With endpoint security, companies can secure end-user devices such as desktops and 
                        laptops with data and network security controls, advanced threat prevention such as 
                        anti-phishing and anti-ransomware, and technologies that provide forensics such as 
                        endpoint detection and response (EDR) solutions.<br/>4. Mobile Security Often overlooked,
                         mobile devices such as tablets and smartphones have access to corporate data, exposing
                          businesses to threats from malicious apps, zero-day, phishing, and IM (Instant Messaging)
                           attacks. Mobile security prevents these attacks and secures the operating systems and
                            devices from rooting and jailbreaking. When included with an MDM (Mobile Device Management)
                             solution, this enables enterprises to ensure only compliant mobile devices have access to
                              corporate assets.<br/> 5. Application Security Web applications, like anything else directly
                               connected to the Internet, are targets for threat actors. Since 2007, OWASP has tracked 
                               the top 10 threats to critical web application security flaws such as injection,
                                broken authentication, misconfiguration, and cross-site scripting to name a few.
                                 With application security, the OWASP Top 10 attacks can be stopped. Application
                                  security also prevents bot attacks and stops any malicious interaction with applications 
                                  and APIs. With continuous learning, apps will remain protected even as DevOps releases
                                   new content. <br/>6. Zero Trust The traditional security model is perimeter-focused,
                                    building walls around an organization’s valuable assets like a castle. However,
                                     this approach has several issues, such as the potential for insider threats and 
                                     the rapid dissolution of the network perimeter. As corporate assets move off-premises
                                      as part of cloud adoption and remote work, a new approach to security is needed.
                                       Zero trust takes a more granular approach to security, protecting individual
                                        resources through a combination of micro-segmentation, monitoring, and enforcement
                                         of role-based access controls.</p>
                
                         
                </div >
                        
            </div>
        </div>
        <br/>
    </div>
  );
}

export default Cybersecurity;
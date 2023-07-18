import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import Cybersecurity from "./routes/Capabilities/Cybersecurity";
import Native from "./routes/Capabilities/Native";
import Wearable from "./routes/Capabilities/Wearable";
import Enterprises from "./routes/Capabilities/Enterprises";
import Energy from "./routes/Services/Energy";
import Finantial from "./routes/Services/Finantial";
import Logistics from "./routes/Services/Logistics";
import Technologies from "./routes/Services/Technologies";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaArrowAltCircleUp } from "react-icons/fa";







const AppLayout = () => {

 


  return (
    <>
    <div className="bg">
      <Navbar />
      <Outlet />
      <div class="container-fluid footer" style={{backgroundColor:"#080710",height:"auto",width:"auto"}}>
<div class="row" style={{marginLeft:"30px",marginRight:"30px"}}>
    <div class="col" >
        <p className="Deep">DEEPLOGIC'S</p>
        {/* <img src={flog}/> */}
        <p className="text">Deeplogics Labs Corp. 
        With over two decades of I.T and security consulting experience, 
        Deeplogics offers dozens of cybersecurity solutions tailored to your company’s
         budget, risk tolerance, and funding stage.</p></div>
    
    <div class="col">
           <p class="Deep">Technologies</p>
        <p className="text">AI/MI<br></br>
UX/UI<br></br>
IOT<br></br>
IT Consulting<br></br>
Data Analytics</p></div>

    <div class="col">
       <p class="Deep">Cloud</p>
        <p className="text">Cloud Consulting<br></br>
          Private Cloud & Hybrid Cloud<br></br>
          Cloud Implementation<br></br>
          Cloud Security<br></br>
          Colud Managed Services<br></br>
          Cloud LifeCycle Services</p></div>

    <div class="col">
        <p class="Deep">Security</p>
        <p className="text">Network Security<br></br>
             Endpoint Security<br></br>
             Data Protection and privacy<br></br>
             Cyber Security<br></br>
             Container Security<br></br>
             Business Continuity Solutions</p></div>

    <div class="col">
        
        <p class="Deep">Contact Us</p>
        <p className="text">Montecasino 234, Calle Pino,<br></br>
          Toa Alta, PR,USA-00953<br></br>
          Email: info@deeplogics.com<br></br>
          Phone: <br/>+1 (787)-387-9807</p>
          
      <div className="Container">
        <div className="row">
          
    <div className="col">
      <Link to={"https://www.facebook.com/login/"}>    <FaFacebook className="icons"/></Link>
    </div>
    <div className="col">
      <Link to={"https://www.instagram.com/accounts/login/"}><FaInstagram className="icons"/></Link>
    
    </div>
    <div className="col"> 
    <Link to={"https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558718_kw.linkedin+login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062141&mcid=6844056167778418689&cid=&gclid=CjwKCAjwh8mlBhB_EiwAsztdBLAjqU_mbhmwOZ4s69SmUI6KZUQKce_7L9FNZU_fNVubERJUzx7TjBoCsOEQAvD_BwE&gclsrc=aw.ds&original_referer=https%3A%2F%2Fwww.google.com%2F"}>    <FaLinkedinIn className="icons" /></Link>
    {/* <FaLinkedinIn className="icons" /> */}
    {/* {"https://www.linkedin.com/login"} */}
    </div>
    </div>
    </div>

          </div>
     </div>            
     </div>
     </div>
                <div style={{marginLeft:"50px"}}>
                    <h6>© 2007-2023 Deeplogics Labs Corp. , All Rights Reserved.</h6>
                </div>
                
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Services/Energy",
        element: <Energy/>,
      },
      {
        path: "Services/Technologies",
        element: <Technologies/>,
      },
      {
        path: "Services/Logistics",
        element: <Logistics/>,
      },
      {
        path: "Services/Finantial",
        element: <Finantial/>,
      },
      {
        path: "Capabilities/Cybersecurity",
        element: <Cybersecurity />,
      },
      {
        path: "Capabilities/Enterprises",
        element: <Enterprises />,
      },
      {
        path: "Capabilities/Wearable",
        element: <Wearable />,
      },
      {
        path: "Capabilities/Native",
        element: <Native />,
      },
      
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />



  
);

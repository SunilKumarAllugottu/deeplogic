import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation, HashNavigation } from 'swiper/modules';
import uiux from "./Assets/computer.gif"
import dms from './Assets/network.gif'
import cc from './Assets/cloud-network.gif'
import it from './Assets/consultation.gif'
import ml from './Assets/robotics.gif'
import ai from './Assets/artificial-intelligence.gif'
import homebg4 from './Assets/3573741.jpg' 
import experience from './Assets/7000961.jpg';
import partner from './Assets/bg-web.jpg'; 
import uibg from './Assets/UI.png'
import aibg from './Assets/Ai.png'
import cloudbg from './Assets/Cloudbg.png'
import itbg from './Assets/ITbg.png'
import mlbg from './Assets/MLbg.png'
import dmsbg from './Assets/Dmsbg.png'
import Card from "react-bootstrap/Card"
import Banner from "../Banner";


function Home() {

  return (
    <>
    
    <div  >
      <Banner/>
     </div>
     <div className="container mt-3" style={{backgroundColor:'#F0F8FF',borderRadius:"25px",}}> 
            <div className="row" style={{marginTop:"-0px"}}>
                <img src={partner}  style={{ height:"400px",borderRadius:"50px",marginTop:"25px"}} alt='partner' className="col-sm-6 "/>
                <div className="col-sm-6 p-5" >
                  <h2 className="lean">Your premier partner for IT and Cyber Security Solutions</h2>
                  <h4 className="bold">We anticipate your IT and cyber security needs before you know what they are.</h4>
                <p className="con">Deeplogics Labs Corp. With over two decades of IT and security consulting experience, Deeplogics offers dozens of cybersecurity solutions tailored to your company’s budget, risk tolerance, and funding stage.

                    <br/><br/>The Deeplogics team has elite and extensive experience in both public and private sectors and brings a deep understanding of how adversaries think and what their next steps may be.

                     <br/><br/>This knowledge helps the Deeplogics team stay one step ahead, watching for the behaviors that signal these likely breach attempts and building effective layers of defense. It’s a very different approach from general IT solution providers who have expanded into the cybersecurity space.
                </p>
                </div>
            </div>
        </div>
              <br/><br/>
        <div className="container mt-3 " style={{backgroundColor:'#f5f5f5',borderRadius:"25px"}}> 
            <div className="row">
                <div className="col-sm-6  text-white p-3" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 className="lean">Since 2007</h2>
                  <h4 className="bold">We Have Decades Of Work Experience!</h4>
                  <p className="con">Provide users with appropriate views and access to requests, problems,
                   changes, contracts, solutions, and reports.
                </p> 
                  <h4 className="bold">Consulting & Insights</h4>
                  <p className="con">Our objective insights steer you toward the right decisions on issues that matter.</p>
                  <h4 className="bold">Research & Advisory</h4>
                  <p className="con">Our combination of research, problem-solving, and hands-on experience.</p>
                  <h4 className="bold">Strategic Advice</h4>
                  <p className="con">Tools to help turn strategy into decisions, and execute for measurable results.</p>
            </div>
                <img src={experience} style={{borderRadius:"50px",}} alt='testing' className="col-sm-6  text-white p-3"/>
            </div>
        </div>
        <br/><br/><br/>
        <div className="container containbg"style={{textAlign:"center",padding:"50px",borderRadius:"50px",boxShadow:"0px 2px 15px rgba(0,0,0,.1)"}} >
        <h2 className="lean">Nationwide Service, Local Expertise</h2>
                  <h4 className="bold">Offering The Latest Software And IT Services To Our Customers!</h4>
                <p className="con" >Improve efficiency, leverage tech, and provide better customer
                 experiences with the modern technology services available all over the world. Our skilled
                  personnel, utilize the latest processing software, combined with decades of experience.
                </p>
        </div>


        <br/><br/><br/>

           
         <div className="body container" style={{backgroundColor:'#F0F8FF',borderRadius:"50px",boxShadow:"0 2.5px 10px #F0F8FF"}} >
      <Swiper 
      //  slidesPerView={1.5}
        // spaceBetween={-350}
        // direction={'vertical'}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1.5,
          },
          960:{
            // slidesPerView:3,
            slidesPerView:3,
            spaceBetween:30,
          },
        }}
      
        // 
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        

        modules={[ Autoplay,Pagination, Navigation, HashNavigation]}
        className="mySwiper "
      >
        <SwiperSlide data-hash="slide1">

        <div className = "container1">
    
    <div className = "card1" style={{backgroundImage:`url(${cloudbg})`}}>
      <div className = "image1">
        <img  className="img1" src = {cc} alt="CLOUD"/><p className="leo">CLOUD COMPUTING</p>
      </div>
      <div className = "content1">
        <p>Whether you are drawing up a Cloud Strategy, considering migrating some applications to the Cloud, automating repetitive Cloud tasks, implementing SysOps, DevOps, or setting up a ‘born in the Cloud’ business application.</p>
        {/* <button className="btn btn-success">Learn More</button> */}
      </div>
    </div>    
    </div>


        </SwiperSlide>
        <SwiperSlide data-hash="slide2">

          <div className = "container1">
    
    <div className = "card1" style={{backgroundImage:`url(${aibg})`}}>
      <div className = "image1" >
        <img  className="img1" src = {ai} alt="AI"/><p className="leo">ARTIFICIAL INTELLIGENCE</p>
      </div>
      <div className = "content1">
        <p>There are various advantages of integrating AI into your business systems. Outsource AI experts from DataToBiz to make the most of the advanced technology to optimize resources, and increase production.</p>
        {/* <button className="btn btn-success">Learn More</button> */}
      </div>
    </div>    
    </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">

          <div className = "container1">
    
    <div className = "card1" style={{backgroundImage:`url(${mlbg})`}}>
      <div className = "image1">
        <img  className="img1" src = {ml} alt="MACHINE"/><p className="leo">MACHINE LEARNING</p>
      </div>
      <div className = "content1">
        <p>There are various advantages of integrating into your business systems. Outsource AI experts from DataToBiz to make the most of the advanced technology to optimize resources, and increase production.</p>
        {/* <button className="btn btn-success">Learn More</button> */}
      </div>
    </div>    
    </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide4">

          <div className = "container1">
    
    <div className = "card1 " style={{backgroundImage:`url(${dmsbg})`}}>
      <div className = "image1">
        <img  className="img1" src = {dms} alt="Data management"/><p className="leo">DATA MANAGEMENT SERVICES</p>
      </div>
      <div className = "content11">
        <p>To sustain your competitive edge, you need to capitalize on the torrent of structured/unstructured, IoT and raw data crossing your borders daily</p>
        {/* <button className="btn btn-success">Learn More</button> */}
      </div>
    </div>    
    </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide5">

          <div className = "container1">
    
    <div className = "card1" style={{backgroundImage:`url(${uibg})`}}>
      <div className = "image1">
        <img  className="img1" src = {uiux} alt="Ui/Ux"/><p className="leo">UI/UX</p>
      </div>
      <div className = "content1">
        <p>UI/UX, as it has popularly come to be known, has its roots in the creator’s ability to empathize with users, understand the product’s objective, and integrate it within the organization.</p>
        {/* <button className="btn btn-success">Learn More</button> */}
      </div>
    </div>    
    </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide6">

          <div className = "container1">
    
    <div className = "card1" style={{backgroundImage:`url(${itbg})`}}>
      <div className = "image1">
        <img  className="img1" src = {it} alt="Consultant"/><p style={{fontWeight:"700"}} >IT CONSULTANT SERVICES</p>
      </div>
      <div className = "content11">
        <p>Trying to solve all your IT challenges internally can become costly and a
           major distraction, Leveraging knowledgeable IT consulting firms.</p>
           {/* <button className="btn btn-success">Learn More</button> */}
      </div>
    </div>    
    </div>
        </SwiperSlide>
        
      </Swiper>
      </div> 



      <br/><br/><br/>


      <div className="container" style={{textAlign:"center",padding:"50px",backgroundColor:'#f5f5f5',borderRadius:"25px"}}>
        <h2 className="lean cent">Why Choose US</h2>
                  <h4 className="bold cent">Our Technologies</h4>
                <p className="con" >Trusted by the world's best organizations, for 16+ years and running, We have been delivering smiles to hundreds of IT advisors, developers, users, and business owners.
                </p>
        </div>
        <br/><br/><br/>
  
                  <div  className="container" >
                       <div className="row">
                         <div className="col-md p-2 column">
                       <Card style={{width:"18rem", lineHeight:"32px"}}>
                             <Card.Header><b>UI/UX</b></Card.Header>
                             <Card.Body>
                               <Card.Text>
                               Deeplogics UX and UI experts create intuitive navigation 
                               and appealing interfaces for your web software.
                               </Card.Text>
                             </Card.Body>
        </Card>
        </div>
                         <div className="col-md p-2 column">
                       <Card style={{width:"18rem", lineHeight:"40px"}}>
                          <Card.Header><b>Graphic Design</b></Card.Header>
                          <Card.Body>
                            <Card.Text>
                            Showcasing innovation every day , our mission is to showcase cutting edge creativity, regardless
                            </Card.Text>
                          </Card.Body>
        </Card>
        </div>
                         <div className="col-md p-2 column">
                       <Card style={{width:"18rem",lineHeight:"32px"}} >
                            <Card.Header><b>Android</b></Card.Header>
                            <Card.Body>
                              <Card.Text>
                              The awards that recognize the talent and effort of the best web designers, developers and agencies .
                              </Card.Text>
                            </Card.Body>
        </Card>
        </div>

                         <div className="col-md p-2 column">
                       <Card style={{width:"18rem",lineHeight:"40px"}}>
                             <Card.Header><b>PHP</b></Card.Header>
                             <Card.Body>
                               <Card.Text>
                               A web design & development award platform for digital folk, UI/UX peeps and inspiring leaders.

                               </Card.Text>
                             </Card.Body>
        </Card>
        </div>
                       
                       
                       </div>
                   </div>

                   <br/><br/><br/>

        <div className="container" style={{textAlign:"center",padding:"50px"  ,boxShadow:"0px 2px 15px rgba(0,0,0,.1)",backgroundColor:'#F0F8FF',borderRadius:"25px"}}>
        <h2 className="lean cent">Providers and IT support staff are ready to help.</h2>
                  <h4>Provides Consultative Approach On Emerging Technology.</h4>
                <p className="con" >Deeplogics has been helping organizations and Providers through the World to manage their IT with our unique approach to technology management and consultancy solutions.
                </p>
        </div>
        <br/><br/>



        <div className="container mt-3" >  
              <div className="container" >
                <div className="row">
                  <div className="col-md ">
                    <div className="container2">
                     <div className="card2" >
                       <h3 className="v moon"> Software assets</h3>
                       <br/>
                       <p className="small c sun ">All aspects of your software assets including purchasing, deployment & maintenance.</p>
                       <div className="go-corner2">
                         <Link className="go-arrow2 btn" to="/home">
                           →
                         </Link>
                       </div>
                     </div>
                </div>
                </div>
                  <div className="col-md ">   <div className="container2">
                     <div className="card2" >
                       <h3 className="v moon">Privileged Access</h3>
                       <br/>
                       <p className="small c sun">Extend proven Tech best practices to HR, finance, and other service delivery areas.</p>
                       <div className="go-corner2">
                         <Link className="go-arrow2 btn" to="/home">
                           →
                         </Link>
                       </div>
                     </div>
                </div>
                </div>
                  <div className="col-md "><div className="container2">
                     <div className="card2" >
                       <h3 className="v moon">Software License</h3>
                       <br/>
                       <p className="small c sun">Build dynamic request templates with associated workflows, and tasks.</p>
                       <div className="go-corner2">
                         <Link className="go-arrow2 btn" to="/home">
                           →
                         </Link>
                       </div>
                     </div>
                </div>
                </div>
                  <div className="col-md"> 
                    <div className="container2">
                     <div className="card2" >
                       <h3 className="v moon">Enterprise Service</h3>
                       <br/>
                       <p className="small c sun">Our technology allows you to offer the latest software to your possible customers!</p>
                       <div className="go-corner2">
                         <Link className="go-arrow2 btn" to="/home">
                           →
                         </Link>
                       </div>
                     </div>
                </div>
                </div>
                </div> 
                
              </div>
        </div>

        <br/><br/>


        <div className="container mt-3"   style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
            <div className="row">
            <img src={homebg4} alt='bg4' className="col-sm-6  text-white p-3" style={{borderRadius:"50px"}}/>

                <div className="col-sm-6  text-white p-3" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                  <h2 className="lean" >Timely Service And Incident Resolutions!!</h2>
                <p className="con">Improve efficiency, leverage tech, and provide better customer experiences with the modern technology services available allover the world.<br/>

                 Our skilled personnel utilising the latest processing software combined with decades of experience.


                </p>
            </div>
            </div>
        </div>
        <br/>

     </> );
}
export default Home;

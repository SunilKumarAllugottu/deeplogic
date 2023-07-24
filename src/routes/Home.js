import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import uiux from "./Assets/computer.gif"
import dms from './Assets/network.gif'
import cc from './Assets/cloud-network.gif'
import it from './Assets/consultation.gif'
import ml from './Assets/robotics.gif'
import ai from './Assets/artificial-intelligence.gif'
import homebg4 from './Assets/3573741.jpg' 
import testing from './Assets/pen-testing-compliance_1.jpg';
import partner from './Assets/bg-web.jpg';
// import banner from './Assets/Cybersecurity banner.png'


function Home() {
  return (
    <>
    <div className="homebg"  style={{height:"auto"}}>
    <div  className="container" style={{padding:"80px"}} > 
            {/* <img src={banner} style={{margin:"0",width:"970px"}}></img> */}
                <div className="col" >
                    <h4 style={{color:"white",}}>Deeplogics Labs Corp.</h4>
                    <h3 style={{color:"white",fontSize:"25px"}}>Cyber Security Solutions.</h3>
                    <p className="con" style={{color:"white",fontSize:"14px"}}>
                        Deeplogics is the market leading solution for recovering
                       and examining digital data<br/> from the broadest range of digital
                       devices, applications, the cloud and warrant returns.     </p>
                </div>
             </div>
             </div>
     <div className="container mt-3" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
            <div className="row">
                <img src={partner} alt='About Us' className="col-sm-6  text-white p-3"></img>
                <div className="col-sm-6  text-white p-3">
                  <h5 className="lean">Your premier partner for IT and Cyber Security Solutions</h5>
                  <h6 className="bold">We anticipate your IT and cyber security needs before you know what they are.</h6>
                <p className="con">Deeplogics Labs Corp. With over two decades of I.T. and security consulting experience, Deeplogics offers dozens of cybersecurity solutions tailored to your company’s budget, risk tolerance, and funding stage.

                    <br/><br/>The Deeplogics team has elite and extensive experience in both public and private sectors, and brings deep understanding of how adversaries think and what their next steps may be..

                     <br/><br/>This knowledge helps the Deeplogics team stay one step ahead, watching for the behaviors that signal these likely breach attempts and building effective layers of defense. It’s a very different approach from general IT solution providers who have expanded into the cybersecurity space.
                </p>
                </div>
            </div>
        </div>
              <br/><br/>
        <div className="container mt-3" style={{backgroundColor:'#f5f5f5',borderRadius:"25px"}}> 
            <div className="row">
                <div className="col-sm-6  text-white p-3">
                  <h5 className="lean">Since 2007</h5>
                  <h6 className="bold">VULNERABILITY ASSESSMENT AND PENETRATION TESTING</h6>
                  <p className="con">Penetration testing, also known as ethical hacking, is a key component of offensive security. The idea is to simulate a cyberattack on an organization's infrastructure to uncover vulnerabilities before actual hackers do. Our Penetration testing services combine manual and automated techniques to ensure the protection of critical organizational data and compliance with industry standards. From developing a comprehensive plan to executing the tests and delivering a detailed report, Deeplogics leverages its expertise to enhance the organization's security position with the best industry practices.

                </p>
            </div>
                <img src={testing} alt='testing' className="col-sm-6  text-white p-3"></img>
            </div>
        </div>
        <br/><br/><br/>
        <div className="container "style={{textAlign:"center",padding:"50px",borderRadius:"50px",boxShadow:"0px 2px 15px rgba(0,0,0,.1)"}} >
        <h5 className="lean">Nationwide Service, Local Expertise</h5>
                  <h6 className="bold">Offering The Latest Software And IT Services To Our Customers!</h6>
                <p className="con" >Improve efficiency, leverage tech, and provide better customer
                 experiences with the modern technology services available allover the world. Our skilled
                  personnel, utilising the latest processing software, combined with decades of experience.
                </p>
        </div>


        <br/><br/><br/>


        <div className='body' style={{backgroundColor:'#F0F8FF',borderRadius:"50px",boxShadow:"0 2.5px 10px #F0F8FF"}} >
      <Swiper 
      //  slidesPerView={1.5}
        // spaceBetween={-150}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
        }}
      
        // hashNavigation={{ watchState: true,}}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper "
      >
        <SwiperSlide data-hash="slide1">

        <div className = "container1">
    
    <div className = "card1">
      <div className = "image1">
        <img  className="img1" src = {cc} alt="CLOUD"/><p>CLOUD COMPUTING</p>
      </div>
      <div className = "content1">
        <p>Whether you are drawing up a Cloud Strategy, considering migrating some applications to the Cloud, automating repetitive Cloud tasks, implementing SysOps, DevOps, or setting up a ‘born in the Cloud’ business application.</p>
        <button className="btn btn-success">Learn More</button>
      </div>
    </div>    
    </div>


        </SwiperSlide>
        <SwiperSlide data-hash="slide2">

          <div className = "container1">
    
    <div className = "card1">
      <div className = "image1">
        <img  className="img1" src = {ai} alt="AI"/><p>AIRTIFICIAL INTELLIGENCE</p>
      </div>
      <div className = "content1">
        <p>There are various advantages of integrating AI into your business systems. Outsource AI experts from DataToBiz to make the most of the advanced technology to optimize resources, increase production.</p>
        <button className="btn btn-success">Learn More</button>
      </div>
    </div>    
    </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">

          <div className = "container1">
    
    <div className = "card1">
      <div className = "image1">
        <img  className="img1" src = {ml} alt="MACHINE"/><p>MACHINE LEARNING</p>
      </div>
      <div className = "content1">
        <p>There are various advantages of integrating into your business systems. Outsource AI experts from DataToBiz to make the most of the advanced technology to optimize resources, increase production.</p>
        <button className="btn btn-success">Learn More</button>
      </div>
    </div>    
    </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide4">

          <div className = "container1">
    
    <div className = "card1 ">
      <div className = "image1">
        <img  className="img1" src = {dms} alt="Data management"/><p>DATA MANAGEMENT SERVICES</p>
      </div>
      <div className = "content1">
        <p>To sustain your competitive edge, you need to capitalize on the torrent of structured/unstructured, IoT and raw data crossing your borders daily</p>
        <button className="btn btn-success">Learn More</button>
      </div>
    </div>    
    </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide5">

          <div className = "container1">
    
    <div className = "card1">
      <div className = "image1">
        <img  className="img1" src = {uiux} alt="Ui/Ux"/><p>UI/UX</p>
      </div>
      <div className = "content1">
        <p>UI/UX, as it has popularly come to be known, has its roots in the creator’s ability to empathize with users, understand the product’s objective, and integrate it within the organization.</p>
        <button className="btn btn-success">Learn More</button>
      </div>
    </div>    
    </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide6">

          <div className = "container1">
    
    <div className = "card1">
      <div className = "image1">
        <img  className="img1" src = {it} alt="Consultant"/><p>IT CONSULTANT SERVICES</p>
      </div>
      <div className = "content1">
        <p>Trying to solve all your IT challenges internally can become costly and a
           major distraction, Leveraging knowledgeable IT consulting firms .</p>
           <button className="btn btn-success">Learn More</button>
      </div>
    </div>    
    </div>
        </SwiperSlide>
        
      </Swiper>
      </div>



      <br/><br/><br/>


      <div className="container" style={{textAlign:"center",padding:"50px",backgroundColor:'#f5f5f5',borderRadius:"25px"}}>
        <h5 className="lean cent">Why Choose US</h5>
                  <h6 className="bold cent">Our Technologies</h6>
                <p className="con" >Trusted by the world's best organizations, for 16+ years and running, We have been delivering smiles to hundreds of IT advisors, developers, users, and business owners.
                </p>
        </div>
        <br/><br/><br/>
  
                  <div >
                       <div className="row">
                         
                       
                         <div className="column">
                           <div className="card">
                             <h3>UX/UI</h3>
                             <p>
                              Deeplogics UX and UI experts create intuitive navigation and appealing interfaces for your web software.</p>
                           </div>
                         </div>
                         
                         <div className="column">
                           <div className="card">
                             <h3>Graphic Design</h3>
                             <p>
                              Showcasing innovation every day , our mission is to showcase cutting edge creativity, regardless</p>
                           </div>
                         </div>
                         
                         <div className="column">
                           <div className="card">
                             <h3>Android</h3>
                             <p>
                              The awards that recognize the talent and effort of the best web designers, developers and agencies .</p>
                           </div>
                         </div>
                         <div className="column">
                           <div className="card">
                             <h3>PHP</h3>
                             <p>
                             A web design & development award platform for digital folk, UI/UX peeps and inspiring leaders.</p>
                           </div>
                         </div>
                       </div>
                   </div>

                   <br/><br/><br/>

        <div className="container" style={{textAlign:"center",padding:"50px"  ,backgroundColor:'#F0F8FF',borderRadius:"25px"}}>
        <h5 className="lean cent">Providers and IT support staff are ready to help.</h5>
                  <h6>Provides Consultative Approach On Emerging Technology.</h6>
                <p className="con" >Deeplogics has been helping organizations and Providers through the World to manage their IT with our unique approach to technology management and consultancy solutions.
                </p>
        </div>
        <br/><br/>



        <div className="container mt-3">  
              <div className="container" >
                <div className="row">
                  <div className="col-md "><div className="container2">
                     <div className="card2" >
                       <h3 className="v moon"> Software assets</h3>
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
            <img src={homebg4} alt='About Us' className="col-sm-6  text-white p-3"></img>

                <div className="col-sm-6  text-white p-3">
                  <h5 className="lean" style={{textAlign:"center",marginTop:"60px"}}>Timely Service, And Incident Resolutions!!</h5>
                <p className="con">Improve efficiency, leverage tech, and provide better customer experiences with the modern technology services available allover the world.<br/>

                 Our skilled personnel, utilising the latest processing software, combined with decades of experience.


                </p>
            </div>
            </div>
        </div>
        <br/>

     </> );
}

export default Home;

import React from 'react';
import { useState } from 'react';
import pho from './Assets/phone.gif'
import location from './Assets/location.gif'
import ema from './Assets/email.gif'
import 'react-phone-input-2/lib/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import homebg from './Assets/Firefly.png'


const Contact = () =>{

  
  const [userData]=useState([]);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [message,setMessage]=useState('');

  const SaveUserDetails=()=>{
    const userDetails={
      "name":name,
      "phone":phone,
      "email":email,
      "message":message,
    }
    userData.push(userDetails)
    localStorage.setItem("data",JSON.stringify(userData))
    toast.success('🦄 Message Submitted!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }


  return (
    <>
    <div className="cybersecurity-bg">
        <div className="header-container">
          <h1 className="header">Contact Us</h1>
        </div>
        <img className="homebg" src={homebg} alt="banner" />
      </div>
    <br/>
    <div className="container" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}>
    <div className="row">
    <div className="col-sm-6">
      <br/> 
    <div className="login-wrap">
        <div className="login-html">

          <div className="Contact"/>

      <div className="login-form">
       <div className="Contact-htm">
            <div className="group">
                 <label htmlFor="user" className="label">Username</label>
                 <input  id="user" type="text" className="input" value={name}  onChange={(e)=>setName(e.target.value)}/>
             </div>
                 <div className="group">
                   <label htmlFor="user" className="label">Phone</label>
                   <input className="input" value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
                 </div>
                 <div className="group">
                   <label htmlFor="pass" className="label">Email Address</label>
                   <input  type="text" className="input" value={email}  onChange={(e)=>setEmail(e.target.value)} />
                 </div>
                 <div className="group">
                   <label htmlFor="pass" className="label">message</label>
                   <textarea  rows={5} className="input" id="txt" value={message}  onChange={(e)=>setMessage(e.target.value)}></textarea>
                 </div>

                 <div className="group">
                   <input type="submit" className="button" defaultValue="Sign Up" onClick={()=>SaveUserDetails()} />
                 </div>
              <div className="hr" />
            </div>
          </div>
        </div>
      </div>
      <br/>
      </div>

                <div className='col-sm-6'>
                  <div className='container'> 
                    <div>
                    <img src={location} className='gif' alt='Address'/>
                      <p><b>Address</b>
                      <br/><br/> PO Box- 361906,
                      <br/><br/>San Juan, PR , USA -00936
                      </p>
                  </div>
                  <div > 
                    <img src={ema} className='gif' alt='Email'/>
                    <p><b>Email</b>
                      <br/><br/>info@deeplogics.com
                      </p>
                  </div>
                  <div >
                    <img src={pho} className='gif' alt='Phone'/>
                    <p><b>Phone</b>
                      <br/><br/> +1 (787)-387-9807
                      </p>
                  </div>
                </div>
                </div>
    </div>
    </div>
    <br/>
			
		<ToastContainer />

    </>
  );
}

export default Contact;
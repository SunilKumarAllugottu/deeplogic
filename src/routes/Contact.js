import React from 'react';
import { useState } from 'react';
import pho from './Assets/phone.gif'
import location from './Assets/location.gif'
import ema from './Assets/email.gif'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Contact = () =>{


	// constructor(props) 
	// 	super(props);
	// 	this.state = { phone: "" };
	
  
  const [userData,setUserDate]=useState([]);
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
    alert("SUBMITTED")
    // setShow1(!show1);
  }


  return (
    <>
    <div className="homebg" style={{height:"auto"}}>
            <h1 className="header" style={{color:"white"}}>Contact Us</h1>
    </div>
    <br/>
    <div className="container" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}>
    <div className="row">
    <div className="col-sm-6">
    <div className="login-wrap">
        <div className="login-html">

          <div className="Contact"/>

      <div className="login-form">
       <div className="Contact-htm">
            <div className="group">
                 <label htmlFor="user" className="label">Username</label>
                 <input id="user" type="text" className="input" value={name}  onChange={(e)=>setName(e.target.value)}/>
             </div>
                 <div className="group">
                   <label htmlFor="user" className="label">Phone</label>
                   {/* <div  value={phone}  onChange={(e)=>setPhone(e.target.value)} style={{color:"#000000"}}><PhoneInput/></div> */}
                   <input className="input" value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
                 </div>
                 <div className="group">
                   <label htmlFor="pass" className="label">Email Address</label>
                   <input required type="text" className="input" value={email}  onChange={(e)=>setEmail(e.target.value)} />
                 </div>
                 <div className="group">
                   <label htmlFor="pass" className="label">message</label>
                   <textarea className="input" id="txt" value={message}  onChange={(e)=>setMessage(e.target.value)}></textarea>
                 </div>

                 <div className="group">
                   <input type="submit" className="button" defaultValue="Sign Up" onClick={()=>SaveUserDetails()} />
                 </div>
              <div className="hr" />
            </div>
          </div>
        </div>
      </div>
      </div>

                <div className='col-sm-6'>
                  <div className='container'> 
                  {/* <div className='row'> */}
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
    {/* </div> */}
    <br/>
			
		

    </>
  );
}

export default Contact;







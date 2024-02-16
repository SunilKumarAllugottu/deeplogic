import wea from './Assets/image-2.png'
import homebg from "./Assets/Firefly.png"

const Wearable =() =>{
    return(
         <>
          <div className="cybersecurity-bg">
        <div className="header-container">
          <h1 className="header">Wearable Technologie</h1>
        </div>
        <img className="homebg" src={homebg} alt="banner" />
      </div>
      <br/>
        <div className="container" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
            <div className="row">
            <div className="image-container col-lg p-4">
                <img src={wea} style={{borderRadius:'10px'}} alt='werable Tech' className="responsive-image"/>
            </div>
                <div className="col-lg" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

                <p className="con"><b>Deeplogics Labs Corp.</b> is the world’s fastest-growing mobility company, developed more than 150+ result-oriented mobile apps and games for businesses of all sorts and all scales across the world. Following successfully delivering cloud computing solutions, Deeplogics Labs Corp. has stepped forward to create innovative wearable solutions to enhance your business performance.

                <br/><br/>We build a robust, customized wearable platform that can be used for developing business apps for Android, Apple, Sony, Google, Pebble, Puma, ARM, Fitbit, Philips, Samsung, and other wearable devices. As an emerging wearable solution provider in the USA and the world, Deeplogics Labs Corp. delivers technology-driven wearable solutions to bring your business to the next level.
                            
                <br/><br/>We are the industry leader in Mobile app development. We Architect, Design, Implement, Test & Deliver world-class mobile applications for iOS, Android, Windows, and beyond. We deliver new apps or porting for your brand in both native and cross-platform by using HTML5, PhoneGap, Sencha Touch, etc. Whether You are a start-up, SMB, or Fortune 500 company from any industry, we have unique solutions for everyone.
                            
                <br/><br/> Wearable or Wearable Gadgets are technology devices used in the form of smartwatches, eyeglasses, bracelets, and fitness bands. the Wearable device is worn by a consumer to measure his health and fitness, to take photos by synchronizing it with smartphones, and to make business tasks easier.
                </p>
                </div>
            </div>
        </div>
        <br/>
         </>
    );
}
export default Wearable;
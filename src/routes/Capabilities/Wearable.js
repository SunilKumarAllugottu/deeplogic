import wea from './image-2.png'

const Wearable =() =>{
    return(
         <>
             <div className="homebg" style={{height:"auto"}}>
        <h1 className="header" style={{color:"white"}}>Wearable Technologie</h1>
      </div>
        <div className="container-fluid "> 
            <div className="row">
                <img src={wea} style={{margin:"auto",top:"0",height:"350px",width:"500px",}} alt='werable Tech' className="col-lg"/>
                <div className="col-lg">

                <p className="con"><b>Deeplogics Labs Corp.</b> is the world’s fastest growing mobility company, developed more than 150+ result-oriented mobile apps and games for businesses of all sorts and all scales across the world. Following successfully delivering cloud computing solutions, Deeplogics Labs Corp. has stepped forward to create innovative wearable solutions to enhance your business performance.

                <br/><br/>We build robust, customized wearable platform that can be used for developing business apps for Android, Apple, Sony, Google, Pebble, Puma, ARM, Fitbit, Philips, Samsung and other wearable devices. As an emerging wearable solution provider in USA and the world, Deeplogics Labs Corp. delivers technology-driven wearable solutions to bring your business to the next level.
                            
                <br/><br/>We are the industry leader in Mobile apps development. We Architect, Design, Implement, Test & Deliver the world class mobile applications for iOS, Android, Windows, and beyond. We deliver new apps or porting for your brand in both native and cross platform by using HTML5, PhoneGap, Sencha Touch etc. Whether You are a start-up, SMB or Fortune 500 company from any industry, we have the unique solutions for everyone.
                            
                <br/><br/> Wearable’s or Wearable Gadgets are technology devices used in the form of smartwatch, eyeglass, bracelet and fitness band. Wearable device is worn by a consumer to measure his health and fitness, to take photos by synchronizing it with smartphones and to make business tasks easier.
                </p>
                </div>
            </div>
        </div>
         </>
    );
}
export default Wearable;
import wea from './Assets/designn web.png'
import homebg from "./Assets/Firefly.png"

const Enterprises =() =>{
    return(
   <>
         <div className='Enterprise'>
        <div className="cybersecurity-bg">
        <div className="header-container">
          <h1 className="header">Enterprise Mobility Solutions</h1>
        </div>
        <img className="homebg" src={homebg} alt="banner" />
      </div>
      <br/>
        <div className="container" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}>          
            <div className="row">
            <div className="image-container col-lg">
                <img src={wea} alt='Enterprises' className="responsive-image"/>
            </div>
            <div className="col-lg " style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"33px"}}>

                <p className="con">Mobile Application Development Services has grown horizons and attained huge admiration of late. Enterprises across the world are embracing this technological advancement due to the incredible success of mobile app development. Mobility became basic to the way organizations implement their businesses.

                <br/><br/> Mobility is undoubtedly a complex technology that most enterprises are facing. In the last couple of years, Mobile devices have evolved very quickly to an extent by introducing applications and services that can change the way firms do business.
                       
                <br/><br/>It is observed that Mobility can help organizations influence the related data to reach customers effectively.
                       
                <br/><br/> Mobile application development has spread like wildfire. With this level of requirement, every SME is building their Mobility Application for wider customer reach. Stand-alone application development was built considering a single type of user over a spread network. But when it comes to enterprise mobile application development there are many variables.
                       
                <br/><br/>Mobility products are built on cross-platform, so all the users are not using a fixed device with a fixed connection. Therefore an application is to be built, which covers types of products and connection types. Mobile Enterprise Application Platform (MEAP) is the base of the development cycle, where it describes the problems faced to build a mobility application for Enterprise Level.
                       
                <br/><br/>To build an Enterprise Level Application using Mobility technology, the developer has to consider MEAP’s Rule OF Three. As per Rule of Three, it states that
                       
                <br/><br/>1. Support three or more mobile applications
                <br/><br/>2. Support three or more mobile operating systems (OS)
                <br/><br/>3. Integrate with at least three back-end data sources
                <br/><br/>When you consider these three rules of engagement, then only an application can be built that can be accessed by any type of device [mobiles/ tablets/ notepads], any type of Operating System [Windows/ Android/ IOS]. This gives a strategic advantage over the development of applications and also a wider customer base.
                
                </p>
                </div>
            </div>
        </div>
        <br/>
        </div>
  </>
    );
}
export default Enterprises;




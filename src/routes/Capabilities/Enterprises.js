import wea from './designn web.png'

const Enterprises =() =>{
    return(
         <>
             <div className="homebg" style={{height:"auto"}}>
        <h1 className="header"style={{color:"white"}}>Enterprise Mobility Solutions</h1>
      </div>
      <br/>
        <div className="container-fluid " style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}>          
            <div className="row">
                <img src={wea} style={{margin:"auto",top:"0",height:"350px",width:"500px"}} alt='werable Tech' className="col-lg"/>
                <div className="col-lg">

                <p className="con">Mobile Application Development Services has grown horizons and attained huge admiration of late. Enterprises across the world are embracing this of technological advancement due to the incredible success of mobile app development. Mobility became basic to the way organizations implement their businesses.

                <br/><br/> Mobility is undoubtedly the complex technology that most of the enterprises are facing. In the last couple of years, Mobile devices have evolved very quickly to an extent by introducing applications and services that have the ability to change the way firms do business.
                       
                <br/><br/>It is clearly observed that Mobility can help organizations influence the related data in order to reach it to the customers in an effective way.
                       
                <br/><br/> Mobile application development has spread like a wildfire. With this level of requirement each and every SME’s are building their own Mobility Application for wider customer reach. Stand alone application development was built considering single type of user over a spread network. But when it comes to enterprise mobile application development there are many variables.
                       
                <br/><br/>Mobility products are built on cross platform, so all the user are not using a fixed device with a fixed connection. Therefore an application is to be built, which covers types of products and connection types. Mobile Enterprise Application Platform (MEAP) is the base of the development cycle, where it describes the problems faced to build an mobility application for Enterprise Level.
                       
                <br/><br/>To build an Enterprise Level Application using Mobility technology, developer has to consider MEAP’s Rule OF Three. As per Rule of Three it states that
                       
                <br/><br/>1. Support three or more mobile applications
                <br/><br/>2. Support three or more mobile operating systems (OS)
                <br/><br/>3. Integrate with at least three back-end data sources
                <br/><br/>When you consider these three rules of engagement, then only an application can be built which can be accessed by any type of device [mobiles/ tablets/ notepads], any type of Operating System [Windows/ Android/ IOS]. This gives a strategic advantage over development of application and also wider customer base.
                
                </p>
                </div>
            </div>
        </div>
        <br/>
         </>
    );
}
export default Enterprises;




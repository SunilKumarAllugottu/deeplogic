import nat from './Assets/20943886.png'

const Native =() =>{
    return(
         <>
             <div className="homebg" style={{height:"auto"}}>
        <h1 className="header" style={{color:"white"}}>Native Mobile Solutions</h1>
      </div>
      <br/>
        <div className="container" style={{backgroundColor:'#F0F8FF',borderRadius:"25px"}}> 
            <div className="row">
                <img src={nat} style={{margin:"auto",top:"0",height:"400px",width:"auto"}} alt='About Us' className="col-lg"/>
                <div className="col-lg p-4" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <p className="con"><b>Is</b> your company optimized and ready for the mobile marketplace? A SmartPhone is an extension of human evolution, and we’ve now reached a point where it’s inextricable from our daily routines at home, at work, and play.

                <br/><br/><b> Not</b> too long ago, a phone was just about voice. Now it is about voice, emotion, business, and happiness. A pocket-sized device such as a smartphone for information, entertainment, and connections can bring more joy than a large TV fitted on a wall. Contact us for your mobile development needs.

                <br/><br/><b>We</b> are the industry leader in Mobile app development. We Architect, Design, Implement, Test & Deliver world-class mobile applications for iOS, Android, Windows, and beyond. We deliver new apps or porting for your brand in both native and cross-platform by using HTML5, PhoneGap, Sencha Touch, etc. Whether You are a start-up, SMB, or Fortune 500 company from any industry, we have unique solutions for everyone.
                </p>
                <h3 className="lean">Our Offerings Include</h3>
                <p className="con">
                        - Mobile Consulting,<br/><br/>
                        - Mobile Application Security,<br/><br/>
                        - Mobile Application Development and Maintenance,<br/><br/>
                        - Platforms – Android, iOS, Windows,<br/><br/>
                        - <b>Deeplogics </b>Labs Corp. engineers can execute your Mobile Projects from design through development, including testing and support on all the major operating systems, platforms, and devices.
                        
                        <br/><br/><b> W</b>hether you are looking to deliver an internal solution or a consumer-facing app, we can deliver you the perfect blend of aesthetic and functional design with the ultimate view of reducing costs, improving efficiency, and increasing marketing awareness.
                        
                        <br/><br/> <b> O</b>ur stringent project process and handpicked development team ensure that your time working with us will give you peace of mind. Our team is of the highest industry standard and is constantly researching and developing new solutions for the industry. So if you are looking for a company that can deliver stunning results on time every time put in a quote request today.
                </p>
                </div>
            </div>
        </div>
        <br/>
         </>
    );
}
export default Native;
import React from 'react'
import image1 from './routes/Assets/Firefly.png'
import video1 from './components/Assets/vid.mp4'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';

const Banner = () => {
  return (
    <>
    <div>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div >
          <img className='imgg1' src={image1} alt="banner" />
          <div className="contain" >
            <div className="cols" >
              <h1> Deeplogics Labs Corp.</h1>
              <h2 >Cyber Security Solutions.</h2>
              <p className="cons">
                Deeplogics is the market-leading solution for recovering
                and examining digital data<br /> from the broadest range of digital
                devices, applications, the cloud, and warrant returns.     </p>
            </div>
          </div>

        </div>
        <div >
          <video autoPlay loop muted className='vid1'>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </Carousel>
    </div>
    </>
  );
};

export default Banner;
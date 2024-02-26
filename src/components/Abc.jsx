
import { Carousel } from 'react-bootstrap'
import './Para.css'
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Abc() {
  const sliderRef = useRef(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <>


   
    












     <div className='m-5 full'>
       <Carousel data-bs-theme="dark">
        <Carousel.Item style={{height:'600px'}} >
          <img style={{height:'90vh'}}
            className="d-block w-100 pic"
            src="https://images.pexels.com/photos/290660/pexels-photo-290660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='fw-bolder'>You’re Feeling the Sounds More</h3>
            <h5 className='fw-bolder con'>You’re feeling the sounds more. It’s simple but actually very, very powerful. That means that you have an emotional connection to the sounds, to the music, which means that you’re basically able to tag the information faster and recognize between different colors, between this sound and that sound..</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:'600px'}} >
          <img
            className="d-block w-100 pic"
            src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3  className='fw-bolder'>You’re Focused on What You Love</h3>
            <h5  className='fw-bolder con'>Focus on what you love. That means forget thinking “oh I need to play jazz and blues and rock and all these things.” Don’t be overwhelmed by what you think you need to learn.
  
  Do what you love, learn the information you love. If you love blues, go for it! It can be anything you want it to be.
  
  </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:'600px'}} >
          <img
            className="d-block w-100 pic"
            src="https://images.pexels.com/photos/8412162/pexels-photo-8412162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className='fw-bolder'>When I Started Playing Guitar: Learning by Listening</h3>
            <h5 className='fw-bolder con'>
            Another sign you’re doing things right? You start singing. Sing in the shower, sing when you walk. Why? There’s a strong connection between the vocal cords, the fingers, the ears. All these things start linking up. So instead of just playing guitar.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     </div>




     <div className='row mb-4'>
      <div className="col-lg-4"></div>
      <div className="col-lg-4"><div>
      <Slider ref={sliderRef} {...sliderSettings}>
        <div>
          <h3>Focus On What You Love</h3>
          <img style={{height:'400px',width:'100%'}} src="https://images.pexels.com/photos/7520935/pexels-photo-7520935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" />
        </div>
        <div>
          <img  style={{height:'400px',width:'100%'}} src="https://images.pexels.com/photos/7569014/pexels-photo-7569014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" />
        </div>
        <div>
          <img style={{height:'400px',width:'100%'}}  src="https://images.pexels.com/photos/4471892/pexels-photo-4471892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" />
        </div>
      </Slider>

    </div></div>
      <div className="col-lg-4"></div>

    </div>
    </>
  )
}

export default Abc
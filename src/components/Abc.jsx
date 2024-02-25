import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Para.css'

function Abc() {
  
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
    </>
  )
}

export default Abc
//import React, { useEffect, useState } from 'react';
//import Typed from 'typed.js';
import './App.css';
import SliderComponent from './SliderComponent';
import imgSlide1 from './static/Images/AP_Wedding_327-4K.jpg';
import imgSlide2 from './static/Images/PA_Haldi_230-X4.jpg';
import imgSlide3 from './static/Images/vivekkrishnanphotography-18_websize.jpg';
import imgSlide4 from './static/Images/Intocandid_Prewedding_01.jpg';
import imgSlide5 from './static/Images/AP_FirstLook_149-X4.jpg';
//249d5a30d4ead676bf8eec1647972714ed536f34.jpg
//
const images = [
    { src: imgSlide1, alt: 'Image 1' },
    { src: imgSlide2, alt: 'Image 2' },
        { src: imgSlide3, alt: 'Image 3' },
            { src: imgSlide4, alt: 'Image 4' },
                { src: imgSlide5, alt: 'Image 5' },
                ];
const Home =()=>{
  {/*useEffect(() => {
    const options = ['Portrait Photographer', 'Event photographer', 'Videographer'];

    const typed = new Typed('.multiple-text', {
      strings: options,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);*/}
    return (
      <>
      <div >
   <SliderComponent images={images} 
      />
   
   </div>
     {/* <section className="bg-main bg-color hero-section row-width">
       <div className="container section-img">

       
<div className="row row-width">
<div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start">


  <h1 className='text-capitalize text-white fw-bolder'>savan naik</h1>
  <h3 className='text-white'><span className="multiple-text text-transform-capitalize"></span></h3>
  <p className="text-capitalize text-grey mt-1 mb-10 text-center text-lg-start">Capturing Moments: The Art, Craft, and Vision of a Photographer's Journey</p>
</div>
</div>
</div>
 <div className="custom-shape-divider-bottom-1717076482">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
        </section>*/}
      </>
    );
  }
  export default Home;

                                                                                                                                                                                                                                                                                        

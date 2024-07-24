import React from "react";
import socialimg from './static/Images/IMG_20240717_004123.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Professional =()=>{
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
    return (
        <>
        <section className="professional-width hero-section end-width d-flex justify-content-center align-items">
      <div className="container professional-img">
<div className="justify-content-center align-items-center align-items-center">
<h2 className='text-capitalize text-white text-center'>Capture Your Moments with Timeless Photography</h2>
<p className="text-capitalize text-grey mt-1 mb-10 text-center">Capturing Moments: The Art, Craft, and Vision of a Photographer's Journey</p>
<div className="text-center">
                      <button onClick={scrollToBottom} className="text-capitalize btn btn-primary scroll-button">get in touch</button>
                    </div>
</div>
</div> 
        </section>
        </>
    )

}
export default Professional;
import React, { useState } from "react";
import '../Home/Slidelogos.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slidelogos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(prevState => Math.max(prevState - 4, 0));
  };

  const nextSlide = () => {
    setCurrentSlide(prevState => Math.min(prevState + 4, 4));
  }; 

  return (
    <div>
      <h3 className="slide-Title">
        <span>We</span> <i>made it happen</i> <span>for them</span>
      </h3>
      <div className="wraplogos">
      <button className="slideBtn" onClick={prevSlide}><FaAngleLeft/></button>
      <div className="slider"> 
      <div className={`slide${currentSlide + 1}`}>
      <div className="slide-1">
      <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_106/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-8.png"alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_106/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-7.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_106/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-6.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_106/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-5.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-4.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-3.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-2.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-1.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-0.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-12.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-11.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-10.png" alt="" />
       <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_106/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-9.png" alt="" />
       </div> 
       </div>
       </div>
       <button className="slideBtn" onClick={nextSlide}>  <FaAngleRight/></button>
       </div>
       <div className="wraplogos">
       <button className="slideBtn" onClick={prevSlide}>  <FaAngleLeft/></button>
       <div className="slider"> 
       <div className="slide-2">
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-13.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-14.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-16.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-17.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-15.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-18.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-19.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-20.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-21.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-22.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-23.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_105/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_partner-copy-24.png" alt="" />
        <img className="slideimageslide" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_228,h_106/https://careernet.in/wp-content/uploads/2021/11/careernet-journey_partner-copy-25.png" alt="" />
       </div>
       </div>
       <button className="slideBtn" onClick={nextSlide}>  <FaAngleRight/></button>
       </div>
    </div>
  );
};

export default Slidelogos;


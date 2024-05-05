import React, { useState } from "react";
import '../Navbar-Menu/ImgSlide.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const ImgSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(prevState => Math.max(prevState - 4, 0));
  };

  const nextSlide = () => {
    setCurrentSlide(prevState => Math.min(prevState + 4, 4));
  }; 

  return (
      <div className="wrapimgs">
        <button className="imgslideBtn" onClick={prevSlide}><FaAngleLeft/></button>
        <div className="imgslider"> 
          <div className={`imgslide${currentSlide + 1}`}>
            <div className="imgslide-1">
              <img 
              className="image"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/07/Outing-Training.jpg" alt="" />
              <img 
              className="image"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2023/03/5.-International-Womens-Day-2023-e1678856795454.jpeg" alt="" />
              <img 
              className="image"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2023/03/4.-International-Womens-Day-2023.jpg" alt="" />
              <img 
              className="image"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/07/Holi-Celebrations.jpg" alt="" />
              <img 
              className="image"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/07/formal-meet.jpg" alt="" />
              <img 
              className="image"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/07/Diwali-Celebrations2.jpg" alt="" />
              <img 
              className="image"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/07/Diwali-Celebrations1.jpg" alt="" />
            </div> 
          </div>
        </div>
        <button className="imgslideBtn" onClick={nextSlide}><FaAngleRight/></button>
      </div>
  );
}

export default ImgSlide;

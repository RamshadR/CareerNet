import React from 'react';
import '../Navbar-Menu/Contact.css';
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer"; 
import ContactDetails from './ContactDetails';
import LocationDetails from './LocationDetails';

export const Contact = () => {
  return (
    <div>
         <Navbar/>
         <div>
         <img
         className='Contact-Coverpic'
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1080/https://careernet.in/wp-content/uploads/2022/05/Contact_us_Banner_edit_v02.jpg" alt="" />
         <div className="photoTexta">Making<br/>talent conversations<br/>happen</div>
         </div>
         <ContactDetails/>
         <LocationDetails/>
         <Footer/>
    </div>
  )
}

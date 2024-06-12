import React from "react";
import "../Navbar-Menu/About.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import LocationDetails from "./LocationDetails";
import Pioneers from "./Pioneers";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-Cover1">
        <img
          className="coverpic-About"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1080/https://careernet.in/wp-content/uploads/2024/01/About-us.png"
          alt=""
        />
         <div className="photoTexta">Making<br/>business growth<br/>happen</div>
      </div>

      <div className="about-Cover2">
        <img className="coverpic-2"
          src="https://careernet.in/wp-content/uploads/2021/11/about-us.jpg"
          alt=""
        />
        <div className="cover2-paraghrap">
        <p>We are Careernet</p>
        <p>
          We are India’s leading talent solutions provider. We are the trusted
          partner for you to shape your teams with holistic solutions at scale,
          and candidates to realise their dream careers. If you’re a global
          employer starting in India, or an indigenous startup, or a large
          enterprise scaling up operations, your talent needs are at the heart
          of what we do. We always see to it that you find what you’re searching
          for.
        </p>
        <p>
          From finding the most passionate individual to looking for an entire
          team, we are adept at helping your organisation find the best talent.
          We help organisations discover markets, start business and scale up.
          And we have been doing it all since 1999.
        </p>
        </div>
      </div>

      <div className="about-Covere3">
      <h3 className="cover3-title"><span>How do we</span> <i>make it happen?</i></h3>
      <div className="Container3">
        <div className="consult">
          <img className="conimagelogs" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/08/Website-Stuff_about-us-icon-26.png" alt="" />
          <h4 className="h4">CONSULT</h4>
          <div className="consult-option">
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Industry Benchmarking</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Market Mapping</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Organisation Design</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Budgeting</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Compensation<br/>Benchmarking</p>
            </div>
          </div>
        </div>

        <div className="access">
          <img className="conimagelogs" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/08/Website-Stuff_about-us-icon-29.png" alt="" />
          <h4 className="h4">ACCESS</h4>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Talent Landscape</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Requirement Plan</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Search Strategy</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Sourcing and Head-<br/>hunting</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Channel Management</p>
          </div>
        </div>

        <div className="assess">
        <img className="conimagelogs" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/08/Website-Stuff_about-us-icon-28.png" alt="" />
          <h4 className="h4">ASSESS</h4>
          <div className="consult-option">
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Industry Benchmarking</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Market Mapping</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Organisation Design</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Budgeting</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Compensation Benchmarking</p>
            </div>
          </div>
          </div>

          <div className="select">
          <img className="conimagelogs" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/08/Website-Stuff_about-us-icon-29.png" alt="" />
          <h4 className="h4">SELECT</h4>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Application Management</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Stakeholder<br/>Management</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Funnelling and Selection</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Decisioning and<br/>Negotiation</p>
          </div>
          <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-70.png" alt="" />
             <p className="point">Reference Checks</p>
          </div>
        </div>

        <div className="consult">
          <img className="conimagelogs" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/08/Website-Stuff_about-us-icon-30.png" alt="" />
          <h4 className="h4">ONBOARD</h4>
          <div className="consult-option">
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Industry Benchmarking</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Market Mapping</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Organisation Design</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Budgeting</p>
            </div>
            <div className="icon-text">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-68.png" alt="" />
            <p className="point">Compensation Benchmarking</p>
            </div>
          </div>
          </div>
      </div>

      <div className="Container4">
      <h3 class="cover4-tittle"><span> Making</span> <i>great teams happen</i></h3>
      <div className="candidate-box">
        <div className="candidate-box1"> 
            <img
              className="scale-with-grid"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/About-us-icon_Innovation-in-Talent.png"
              alt="Innovation in talent acquisition"
            />
            <h4 className="box-title">Innovation in talent<br/>acquisition</h4>
            <div className="candidate-para0">
            Since 1999, we have seen the evolution of talent<br/>acquisition in the country and transformed<br/>ourselves with the changing recruitment<br/>dynamics. That has helped us a great deal in<br/>innovating our solutions for clients from time to<br/>time.
          </div>
        </div>
        <div className="candidate-box1"> 
            <img
              className="scale-with-grid"
              src="https://Careernet.in/wp-content/uploads/2021/08/Website-Stuff_about-us-icon-36.png"
              alt="Innovation in talent acquisition"
            />
            <h4 className="box-title">Network of high quality<br/>professionals</h4>
            <div className="candidate-para1">
            Our world-class recruitment service platform<br/>makes it easy for us to nurture relationships<br/>with over 5 million candidates and 2,000+<br/>institutions spanning 100+ locations pan-India.<br/>Our extensive talent network covers candidates<br/>across various specialties, domains, and levels.
          </div>
        </div>
        <div className="candidate-box1"> 
            <img
              className="scale-with-grid"
              src="https://careernet.in/wp-content/uploads/2021/09/Website-Stuff_about-us-icon-copy.png"
              alt="Innovation in talent acquisition"
            />
            <h4 className="box-title">Meeting the talent needs of<br/>all industries</h4>
            <div className="candidate-para2">
            Over these years, we have partnered with<br/>businesses of different sizes and nature, from<br/>brick and mortar organisations to new-age<br/>startups. From finding the right talent across<br/>functional domains to serving businesses across<br/>industry verticals, we do it all.
          </div>
        </div>
        <div className="candidate-box1"> 
            <img
              className="scale-with-grid"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_about-us-icon-copy-3.png"
              alt="Innovation in talent acquisition"
            />
            <h4 className="box-title">Trusted by leading<br/>enterprises</h4>
            <div className="candidate-para3">
            Our team comprises 2,000+ highly motivated<br/>professionals with 58% diversity and 20%<br/>tenured team with 5+ years of continued<br/>success. We have helped 1,000+ enterprise<br/>customers find the right talent and served 50+<br/>Fortune 500 companies across domains so far.
          </div>
        </div>
        <div className="candidate-box1"> 
            <img
              className="scale-with-grid"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/Website-Stuff_about-us-icon-copy-2.png"
              alt="Innovation in talent acquisition"
            />
            <h4 className="box-title">Driving digitisation across<br/>verticals</h4>
            <div className="candidate-para4">
            We have been able to convert over 1M+<br/>digitised transactions across processes like<br/>campus assessments and onboarding. Currently,<br/>we are administering over 1 million assessments<br/>every year across India.
          </div>
        </div>
        <div className="candidate-box1"> 
            <img
              className="scale-with-grid"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/Website-Stuff_about-us-icon-copy-6.png"
              alt="Innovation in talent acquisition"
            />
            <h4 className="box-title">Scaling up RPOs and turnkey<br/>engagements</h4>
            <div className="candidate-para5">
            We have successfully onboarded more than,<br/>100+ RPO engagements, scaling from 200<br/>to 5,000 every year.
          </div>
        </div>
        <div className="candidate-box1"> 
            <img
              className="scale-with-grid"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_about-us-icon-34-1.png"
              alt="Innovation in talent acquisition"
            />
            <h4 className="box-title">Broad spectrum of<br/>customised solutions</h4>
            <div className="candidate-para6">
            We offer a suite of customisable solutions to<br/>address specific requirements which span across<br/>the spectrum. From campus hiring to leadership<br/>hiring, we take care of it all.
          </div>
        </div>
        <div className="candidate-box1"> 
            <img
              className="scale-with-grid"
              src="https://careernet.in/wp-content/uploads/2021/09/Website-Stuff_about-us-icon-copy-5-1.png"
              alt="Innovation in talent acquisition"
            />
            <h4 className="box-title">Risk-reward based services<br/>partnership</h4>
            <div className="candidate-para7">
            We work on a risk-reward based partnership<br/>maintaining the balance between service levels<br/>and pricing, while incorporating this into our<br/>RPO engagement models.
          </div>
        </div>
        
     </div>    
    </div>
    <div className="cover5">
    <h3 className="cover5-text"><span>Making</span> <i>innovative recruitment
      happen since 1999</i></h3>
      <img className="cover5-pic" 
      src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1460,h_468/https://careernet.in/wp-content/uploads/2021/11/careernet-journey_Journey-02-1.png" alt="" />
    </div>
      </div>
      <Pioneers/>
      <LocationDetails/>
      <Footer />
    </div>
  );
};

export default About;

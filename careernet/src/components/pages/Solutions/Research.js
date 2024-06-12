import React from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import SolutionCover3 from "./SolutionCover3";
import Words from  "../Home/Words";
import RecruitmentForm from "./RecruitmentForm";

const Research = () => {
  return (
    <div>
      <Navbar />
      <div className="about-Cover1">
        <img
          className="coverpic-About"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1080/https://careernet.in/wp-content/uploads/2022/05/Research_and_Consulting_banner_edit_v02.jpg"
          alt=""
        />
        <div className="photoTexta">
          Making
          <br />
          insights happen
        </div>
      </div>
      <div className="cover2Expertise">
        <img
          className="coverpic2-Expertise"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Solution_RC-image.png"
          alt=""
        />
        <div className="cover2-paraghrap-Expertise">
          <p>
            To ensure you have the right recruitment strategy, the knowledge of
            current market trends, talent pool availability in a particular
            geography, competitor analysis etc. are key inputs for the
            recruitment leaders. We assist organisations in setting up their
            business in India by identifying the right city and area for their
            office location to attract the best talent. We also help them with
            determining the right compensation, designing an effective
            organisational structure, and sustainable technology and
            infrastructure. We make it all happen.
          </p>
        </div>
      </div>

      <div className="lhCover2">
        <div className="lhCover2-box">
          <img
            className="lhCover2-img"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Careernet-Website-Icons_RC.png"
            alt=""
          />
          <div className="lhCover2-text">
            <h4 className="lhCover2-title">RECRUITMENT STRATEGY</h4>
            <div className="lhCover2-para">
              We help our clients achieve their talent acquisition business
              goals and stay ahead of the curve through continuously meeting
              their recruitment objectives in the long term. We make formulation
              of an effective recruitment strategy happen by advising them on
              matters that have a direct bearing on managing and recruitment. We
              also offer location consulting to organisations looking to set up
              an office in a new city. We help clients identify the best
              location for their office, while keeping talent availability and
              optimisation of business goals and resources in mind.
            </div>
          </div>
        </div>
        <div className="lhCover2-box">
          <img
            className="lhCover2-img"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/RC-4.png"
            alt=""
          />
          <div className="lhCover2-text">
            <h4 className="lhCover2-title">COMPENSATION STRATEGY</h4>
            <div className="lhCover2-para">
              Offering employees the compensation that they deserve plays a key
              role in their retention. At the same time, talent budget
              optimisation is an important aspect of business growth. We provide
              advisory services for defining the right compensation for the
              talent being hired by your organisation by applying our thorough
              understanding of the market dynamics. Our analysis takes into
              consideration the mix of candidate’s skill sets, experience and
              CTC band.
            </div>
          </div>
        </div>
      </div>
      <div className="lhCover2">
        <div className="lhCover2-box">
          <img
            className="lhCover2-img"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/RC-3.png"
            alt=""
          />
          <div className="lhCover2-text">
            <h4 className="lhCover2-title">ORGANISATIONAL STRUCTURING</h4>
            <div className="lhCover2-para">
              In today's evolving business landscape, organisational structures
              are far more complex than they used to be a few years ago. We take
              your business goals, industry, and company culture into
              consideration when formulating the structure for your
              organisation. We offer consultation for organisational structures
              including functional, divisional, flatarchy, matrix, centralised
              and decentralised models. Our goal-driven and diagnosis-led
              approach enables us to deliver effective and efficient
              organisational structures that accelerate business growth.
            </div>
          </div>
        </div>
        <div className="lhCover2-box">
          <img
            className="lhCover2-img"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/RCc-1.png"
            alt=""
          />
          <div className="lhCover2-text">
            <h4 className="lhCover2-title">REMOTE WORK OPTIMISATION</h4>
            <div className="lhCover2-para">
              Our remote work consulting services enable organisations to
              operate effectively and profitably. We offer advisory on cost
              optimisation, ensuring employee productivity, and achieving
              operational efficiency through the right technology and
              infrastructure.
            </div>
          </div>
        </div>
      </div>
      <SolutionCover3/>
      <Words/>
      <RecruitmentForm/>
      <Footer />
    </div>
  );
};

export default Research;

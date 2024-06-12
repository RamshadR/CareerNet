import React from "react";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import "./PermanentHiring.css";
import SolutionCover3 from "./SolutionCover3";
import Words from  "../Home/Words";
import RecruitmentForm from "./RecruitmentForm";

const PermanentHiring = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img
          className="solution-coverpic"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1080/https://careernet.in/wp-content/uploads/2022/05/PH-banner_edit_v02.jpg"
          alt=""
        />
        <div className="hiring-text">
          Making <br /> the best talent <br /> happen
        </div>
      </div>
      <div className="cover2Expertise">
        <img
          className="coverpic2-Expertise"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-Stuff-solution_PH-image-1.png"
          alt=""
        />
        <div className="cover2-paraghrap-Expertise">
          <p>Permanent staffing is not mere matchmaking for us.</p>
          <p>
            In other words, our outlook on staffing is not operational but
            transformational. We adopt a problem-solving approach and rely on
            our decades of expertise and foresight to find the right people for
            your evolving business needs. We offer staffing solutions that are
            custom built for specific projects as well as to support employers
            on an ongoing basis. Our methodology starts with gaining a deep
            understanding of your organisation’s business, specific requirements
            as well as constraints, preferences and challenges.
          </p>
        </div>
      </div>
      <div className="ph-cover3">
      <div className="secondpage">
        <div className="paragraph">
          <p>
            Every organisation is confronted with challenges of a dynamic
            business world characterised by a skewed demand and availability
            ratio. We have been in the talent solutions space since 1999, and
            with the largest team of recruiters in India, we have fulfilled over
            750,000 placements over these years. We share a lasting relationship
            with these candidates who form our expansive proprietary database.
            This vast network, coupled with the intelligence of candidates we
            place, enables us to shortlist the right profiles and fulfill your
            demand for highly specialised talent - across domains, industries
            and experience levels - quickly and at scale. Additionally, our
            network of talent can be supplemented by other sourcing channels as
            and when required.
          </p>
          <p>
            Our service delivery teams are organised by industry and function to
            fulfill your requirements through customised processes. Our
            end-to-end processes are enabled by our in-house extensible
            technology that can be plugged into your systems, if required. With
            our extensive experience in fulfilling turnkey staffing projects and
            service level agreements (SLAs) that are time-bound and
            results-oriented, we make niche talent happen.
          </p>
        </div>
        <img
          className="coverpic2"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-Stuff-solution_PH-image-2.png"
          alt=""
        />
      </div>
      </div>
      <SolutionCover3/>
      <Words/>
      <RecruitmentForm/>
      <Footer />
    </div>
  );
};

export default PermanentHiring;

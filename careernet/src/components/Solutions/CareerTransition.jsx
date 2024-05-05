import React from "react";
import Navbar from "../Navbar";
import './CareerTransition.css';
import Footer from "../Footer";
import RecruitmentForm from "./RecruitmentForm";

const CareerTransition = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img
          className="joinus-Coverpic"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1080/https://careernet.in/wp-content/uploads/2022/05/CT_Banner_edit_v02.jpg"
          alt=""
        />
        <div className="dhphotoText">
          Making <br />
          transitions
          <br /> happen
        </div>
      </div>
      <div className="secondpage">
        <div className="dhparagraph">
          <p>
            Workforce optimisation initiatives often involve difficult decisions
            and communication to employees. While preparing and notifying
            impacted employees is part of the challenge, managing your company’s
            reputation and work environment during and after the change is
            another. If your organisation undergoes restructuring, let us help
            you with the career transitions of your employees.
          </p>
          <p>
            We offer outplacement and career transition services bundled with
            support, counseling, career guidance and search advisory to
            facilitate transitions for your employees. From junior to senior
            levels, we provide assistance to employees across functions.
          </p>
          <p>
            We work with impacted employees to manage their expectations about
            what lies ahead, help them understand their immediate career
            options, and provide assistance with outplacement.
          </p>
        </div>
        <img
          className="coverpic2"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Solution_CT-image.png"
          alt=""
        />
      </div>

      <div className="ctCover2">
        <div className="lhCover2-box">
          <img
            className="lhCover2-img"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/PS_CT-118.png"
            alt=""
          />
          <div className="lhCover2-text">
            <h4 className="lhCover2-title">MANAGING EXPECTATIONS</h4>
            <div className="lhCover2-para">
              Managing the expectations of affected employees is crucial to an
              organisation’s reputation as well as ensuring their smooth exit.
              We pay individual attention to the employees and work on tempering
              their disappointment on being notified.
            </div>
          </div>
        </div>
        <div className="lhCover2-box">
          <img
            className="lhCover2-img"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/PS_CT-123-1.png"
            alt=""
          />
          <div className="lhCover2-text">
            <h4 className="lhCover2-title">
              COUNSELLING FOR IMPACTED EMPLOYEES
            </h4>
            <div className="lhCover2-para">
              Our team has extensive experience in counselling candidates. From
              helping them build their resume, to guiding them with respect to
              the right career direction, to assisting them with interview
              preparation, we do it all. This is an important step in reducing
              the possibility of them feeling abandoned or let down by their
              employer.
            </div>
          </div>
        </div>
      </div>
      <div className="ctCover2">
        <div className="lhCover2-box">
          <img
            className="lhCover2-img"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/PS_CT-121-1.png"
            alt=""
          />
          <div className="lhCover2-text">
            <h4 className="lhCover2-title">SENSITISATION SESSIONS</h4>
            <div className="lhCover2-para">
              We provide large scale sensitisation sessions for organisations
              for managers and team members to be better aligned with the
              situation. These sessions go a long way in keeping up the employee
              morale and ensuring a positive transition period for the impacted
              employees.
            </div>
          </div>
        </div>
        <div className="lhCover2-box">
          <img
            className="lhCover2-img"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/PS_CT-120.png"
            alt=""
          />
          <div className="lhCover2-text">
            <h4 className="lhCover2-title">TARGETTED SEARCH</h4>
            <div className="lhCover2-para">
              With our expansive network of clients and the meaningful
              relationships built since 1999, we are equipped to provide
              outplacement services at scale, across domains. We start with
              understanding the employees’ aspirations and skill sets and
              identify the best job opportunities for them.
            </div>
          </div>
        </div>
      </div>
      <div className="ctlCover2">
        <div className="lhCover2-box">
          <img
            className="lhCover2-img"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/PS_CT-122.png"
            alt=""
          />
          <div className="lhCover2-text">
            <h4 className="lhCover2-title">CORPORATE RESPONSIBILITY</h4>
            <div className="lhCover2-para">
              Workforce restructuring programmes are hard on employees - the
              ones that are moving out as well as the ones staying back. It is
              critical for organisations to undertake employee welfare measures,
              maintain an image aligning with their company values and brand,
              and maintaining integrity. Our career transition services help you
              in carrying out these responsibilities towards your employees.
            </div>
          </div>
        </div>
        <div className="lhCover2-box">
          <img
            className="lhCover2-img"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Icons_LH-88.png"
            alt=""
          />
          <div className="lhCover2-text">
            <h4 className="lhCover2-title">ADVISORY SERVICES</h4>
            <div className="lhCover2-para">
              In addition to helping the affected employees build and fine tune
              their resumes, we also provide advisory services that include
              insights about the job market’s landscape, and compensation trends
              for the role(s) and industry vertical(s) of the impacted
              employees.
            </div>
          </div>
        </div>
      </div>
      <p className="careertransition-para"><b>DISCLAIMER:</b> We carry the transition processes in complete confidentiality. Your employees’ personal information is safeguarded and will not be shared without their explicit <span id="request-btnn">permission.</span></p>
      <RecruitmentForm/>
      <Footer />
    </div>
  );
};

export default CareerTransition;

import React from "react";
import "../Solutions/Solutins.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SolutionCover1 from "./SolutionCover1";
import SolutionCover2 from "./SolutionCover2";
import SolutionCover3 from "./SolutionCover3";
import Words from  "../Words";
import RecruitmentForm from "./RecruitmentForm";

const Solutins = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img
          className="solution-coverpic"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1080/https://careernet.in/wp-content/uploads/2022/05/RPO_banner_edit_v02.jpg"
          alt=""
        />
        <div className="solution-text">
          Making <br /> RPO happen
        </div>
      </div>
      <div className="EXpicpara">
        <div className="EXpara">
          <p>
            Great organisations are not built overnight. It takes the right
            strategy and years of hard work to make it happen. To achieve this,
            you need to onboard the right team at every stage of your growth.
          </p>
          <p>
            This is where we come in. We help you formulate your hiring
            strategy, map internal processes, staff it with the appropriate
            delivery team and optimise your talent supply chain. Every
            stakeholder is accounted for and the right interfaces are provided
            for smooth delivery.
          </p>
          <p>
            The fact that we have been doing RPO since 2006, at scale, proves
            that we understand the necessity of expertise and process management
            in a rapidly changing economic scenario. And that is what enables us
            to offer this service to employers across the nation as well as the
            world.
          </p>
        </div>
        <div>
          <img
            className="EXpic"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Solution_RPO-image.png"
            alt=""
          />
        </div>
      </div>
      <div className="solution-Cover1">
        <h4 className="slcover1">
          <span>
            When you let us take care of
            <br /> your 
          </span>
          <i>
            <b>
               Recruitment Process
              <br /> Outsourcing
            </b>
          </i>
          needs, this is <br />
          what you get
        </h4>
        <table className="slcover1-point">
          
            <tr className="table">
              <td>
                <img
                  className="slicon"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-71.png"
                  alt=""
                />
              </td>
              <td>
                <p>
                  Highly scalable and complete ownership of entire recruitment
                  cycle
                </p>
              </td>
            </tr>
            <tr className="table">
              <td>
                <img
                  className="slicon"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-71.png"
                  alt=""
                />
              </td>
              <td>
                <p>
                  Single window for hiring needs across job families and career
                  levels
                </p>
              </td>
            </tr>
            <tr className="table">
              <td>
                <img
                  className="slicon"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-71.png"
                  alt=""
                />
              </td>
              <td>
                <p>Fulfilment across different business magnitudes</p>
              </td>
            </tr>
            <tr className="table">
              <td>
                <img
                  className="slicon"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-71.png"
                  alt=""
                />
              </td>
              <td>
                <p>Optimisation of your talent supply chain</p>
              </td>
            </tr>
            <tr className="table">
              <td>
                <img
                  className="slicon"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-71.png"
                  alt=""
                />
              </td>
              <td>
                <p>Hassle-free, swift hiring</p>
              </td>
            </tr>
            <tr className="table">
              <td>
                <img
                  className="slicon"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-71.png"
                  alt=""
                />
              </td>
              <td>
                <p>
                  Diagnosis-led approach - CESI (Consideration, Evaluation,
                  Structure and <br/> Implementation)
                </p>
              </td>
            </tr>
            <tr className="table">
              <td>
                <img
                  className="slicon"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_About-us-bullet-71.png"
                  alt=""
                />
              </td>
              <td>
                <p> Well defined SLAs and KPIs to measure performance</p>
              </td>
            </tr>
          
        </table>
      </div>
      <SolutionCover1/>
      <SolutionCover2/>
      <SolutionCover3/>
      <Words/>
      <RecruitmentForm/>
      <Footer />
    </div>
  );
};

export default Solutins;

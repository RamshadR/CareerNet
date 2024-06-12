import React from "react";
import "../Home/ThougtCenter.css";
import { Link } from "react-router-dom";


const ThoughtCentre = () => {
  return (
    <div className="thoughtCenter">
      <h3 className="thoughtTitle">
        <i>Thought Centre</i>
      </h3>
      <div className="thoutContainer">
        <div className="thoughBox">
          <div className="imgbox">
            <img
              className="thougtImg"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/careernet-news.jpg"
              alt=""
            />
          </div>
          <div className="whiteBox">
            <h3> NEWS</h3>
            <p className="thoudhcentreparagra">
              The news, the views, the updates, the press releases, the media
              coverage, everything. Find out what’s happening at Careernet.
            </p>
            <Link to="/news">
              <div className="viewmore">
                <img
                  className="viewBtn"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                  alt=""
                />
                <span className="viewText">View All</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="thoughBox">
          <img
            className="thougtImg"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/careernet-RESOURCES.jpg"
            alt=""
          />
          <div className="whiteBox">
            <h3> RESOURCES</h3>
            <p className="thoudhcentreparagra">
              The blogs, the case studies, the <br />
              whitepapers. Find all the articles and
              <br /> infographics.
            </p>
            <Link to="/resources">
            <div className="viewmore">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="viewText">View All</span>
            </div>
            </Link>
          </div>
        </div>
        <div className="thoughBox">
          <img
            className="thougtImg"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Careernet-Website_Home-page-icon.jpg"
            alt=""
          />
          <div className="whiteBox">
            <h3> REPORTS</h3>
            <p className="thoudhcentreparagra">
              The numbers, the reports, the statistics. Gain insights into
              industry trends from our repository of well-researched reports.
            </p>
            <Link to="/reports">
            <div className="viewmore">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="viewText">View All</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtCentre;

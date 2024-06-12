import React from "react";
import { Link } from "react-router-dom";
import "../Home/ServicePage.css";

const ServicePage = () => {
  return (
    <div className="servicePage">
      <h1 className="serviceTitle">
        <span>We</span> <i>make customer delight happen</i>
      </h1>
      <div className="serviceBox-Wrap">
        {servicesData.map((service, index) => (
          <Link to={service.link} key={index}>
            <div className="serviceBox">
              <img className="boximagees" src={service.imageUrl} alt="" />
              <h4 className="boxTitle">{service.title}</h4>
              <span className="boxDescription">{service.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const servicesData = [
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/Website-Stuff_Home-Page-59-1.png",
    title: "RECRUITMENT PROCESS OUTSOURCING (RPO)",
    description:
      "Holistic service with complete ownership for long-term efficiencies.",
    link: "/solution",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/Website-Stuff_Home-Page-62-1.png",
    title: "PERMANENT HIRING",
    description:
      "The best talent with custom-built solutions and an expansive candidate network.",
    link: "/permanenetHiring ",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/Website-Stuff_Home-Page-61-1.png",
    title: "PROFESSIONAL STAFFING",
    description:
      "Staffing solutions to hire specialised talent on-demand, at scale.",
    link: "/professionalStaffing",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff-new_Home-Page-10.png",
    title: "LEADERSHIP HIRING",
    description:
      "The best leadership talent for organisations to become future-ready.",
    link: "/leadershipHiring ",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff-new_Home-Page-07.png",
    title: "DIVERSITY AND INCLUSION",
    description:
      "Enabling organisations to build inclusive workplaces with diverse talent.",
    link: "/diversity",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/Website-Stuff_Home-Page-63-1.png",
    title: "DIGITAL FIRST HIRING",
    description:
      "Digitised hiring enabled by technology innovations for borderless recruitment.",
    link: "/digitalHiring",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Home-Page_Talent-Branding.png",
    title: "TALENT BRANDING",
    description:
      "Customisable solutions to engage with candidates and showcase your employer brand.",
    link: "/talentBrandin",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff-new_Home-Page-11.png",
    title: "RESEARCH AND CONSULTING",
    description:
      "Insights and advice on global market and talent strategies for growth and expansion.",
    link: "/research",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff-new_Home-Page-09.png",
    title: "CAREER TRANSITIONS",
    description:
      "Smooth employee transitions with counseling, search advisory and outplacement support.",
    link: "/careerTransition",
  },
];

export default ServicePage;

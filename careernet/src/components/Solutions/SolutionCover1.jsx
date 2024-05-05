import React from "react";
import "./SolutionCover1.css";

const SolutionCover1 = () => {
  return (
    <div>
      <h4 className="sc1-Title">
        <i>
          Our holistic RPO service integrates the entire supply chain, bringing <br/>
          together all aspects in a highly efficient and result-oriented manner
        </i>
      </h4>
      <div className="sc1Box-Wrap">
        {EX3Data.map((EX3, index) => (
          <div className="sc1-Box" key={index}>
            <img src={EX3.imageUrl} alt="" />
            <h4
              className="sc1-boxTitle"
              dangerouslySetInnerHTML={{ __html: EX3.title }}
            />
            <span
              className="sc1-boxDescription"
              dangerouslySetInnerHTML={{ __html: EX3.description }}
            />
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

const EX3Data = [
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_RPO-73-1.png",
    title: "RECRUITMENT <br/> PLANNING",
    description: "Establishing predictable <br/> outcomes",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_RPO-75-1.png",
    title: "TALENT<br> BRANDING",
    description: "Achieving crystal clear<br> talent positioning",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_RPO-1.jpg",
    title: "TALENT<br> REACH",
    description: "Ensuring efficient access<br> to right talent",
  },
  {
    imageUrl:
      "https://careernet.in/wp-content/uploads/2021/11/Website-icon-new_RPO_-SOURCING-MANAGEMENT.png",
    title: "SOURCING <br> MANAGEMENT",
    description: "Optimising source mix for<br> ideal hiring practices",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Vendor-icon_RPO-51-1.png",
    title: "VENDOR<br> INTEGRATION",
    description: "Widening reach in an<br> organised manner",
  },
  {
    imageUrl:
      "https://careernet.in/wp-content/uploads/2021/10/Website-Stuff-new_RPO-14.png",
    title: "ASSESSMENT<br> SOLUTIONS",
    description: "Delivering assessments for<br> precision at scale",
  },
  {
    imageUrl:
      "https://careernet.in/wp-content/uploads/2021/10/Website-Stuff-new_RPO-15.png",
    title: "PROGRAMME<br> MANAGEMENT",
    description: "Delivering faster<br> turnaround time",
  },
  {
    imageUrl:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_RPO-74.png",
    title: "WORKFLOW <br> AUTOMATION",
    description: "Enhancing transparency<br> and control",
  },
];
export default SolutionCover1;

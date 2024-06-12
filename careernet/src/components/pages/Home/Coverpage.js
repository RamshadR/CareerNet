import React from "react";
import "../Home/Coverpage.css";

const Coverpage = () => {
  return (
    <div>
      <div>
        <img
          className="coverpic"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1921,h_921/https://careernet.in/wp-content/uploads/2021/11/Homepage-banners_Home-Page-banner-2.jpg"
          alt="coverphoto"
        />
        <div className="photoText1">we make dream careers happen <br/>we make great teams happen </div>
        <div className="photoText2">We make it <br/> happen</div>
      </div>
      <div className="secondpage">
        <div className="paragraph">
          <p>
            We are India’s leading talent solutions provider. From startups to
            Fortune 500 companies, we have been a trusted partner in the growth
            journey of organisations of all sizes. We have seen clients who were
            garage start ups evolving into leading industry players. We have
            enabled both homegrown and global enterprises to start and scale in
            India. We have fulfilled the requirements of companies of all sizes
            at different growth stages with our holistic talent solutions.{" "}
          </p>
          <p>
            We cherish the long-standing relationships with our vast clientele,
            100+ of whom have trusted us for over a decade. We take pride in the
            roster of over 5,000 candidates who sought our advice in crafting
            their career journeys, and are CXOs today. For all of them, we make
            finding great teams and dream careers happen. Whatever the role,
            whatever your requirement, we will deliver. We always have.
          </p>
          <p>Just say the word, and we’ll make sure <b>we make it happen.</b> </p>
        </div>
        <div>
        <img
          className="coverpic2"
          src="https://careernet.in/wp-content/uploads/2021/11/Website-Stuff_Home-page-image.png"
          alt=""
        />
        </div>
      </div>
      <img
          className="coverpic2m"
          src="https://careernet.in/wp-content/uploads/2021/11/Website-Stuff_Home-page-image.png"
          alt=""
        />
      <div className="numberWrap">
        <table className="tableNumber">
          <td className="numberspace-t">
            <th >
              <h1 className="number">500+</h1>
            </th>
            <tr><p className="numbertext">Client <br/> relationships</p></tr>
          </td>
          <td className="numberspace-t">
            <th>
              <h1 className="number">100+</h1>
            </th>
            <tr><p className="numbertext">RPO <br/> engagements</p></tr>
          </td>
          <td className="numberspace-t">
            <th>
              <h1 className="number">5M+</h1>
            </th>
            <tr><p className="numbertext">Candidates <br/> database</p></tr>
          </td>
          <td className="numberspace-t">
            <th>
              <h1 className="number">1+</h1>
            </th>
            <tr><p className="numbertext">Assessments <br/> per year</p></tr>
          </td>
          <td className="numberspace-t">
            <th>
              <h1 className="number">1K+</h1>
            </th>
            <tr><p className="numbertext">CXOs <br/> onboarded</p></tr>
          </td>
        </table>
      </div>
    </div>
  );
};

export default Coverpage;

import React, { useEffect } from "react";
import { useParams} from "react-router-dom";
import Navbar from "../../../Common/Navbar";
import Footer from "../../../Common/Footer";
import reportsData from "../../../../assets/mock/ReportData.json";

const ReportsCardDetails = () => {
  const { id } = useParams();
  const reportItem = reportsData.find((item) => item.id === parseInt(id));

  useEffect(() => {
    localStorage.setItem("reportId", id);
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="npage">
        <h1 className="npage-title">{reportItem.title}</h1>
      </div>
      <div className="npageimg">
        <img src={reportItem.imageSrc} alt={reportItem.title} />
      </div>
      <div className="npagepara">
        {reportItem.desc.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <a >
          <div className="viewmoreb">
            <img
              className="viewBtn"
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
              alt="Arrow"
            />
            <span className="ReadText">Download the report</span>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default ReportsCardDetails;

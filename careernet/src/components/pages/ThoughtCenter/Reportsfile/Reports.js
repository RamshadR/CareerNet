import React, { useState, useEffect } from "react";
import Navbar from "../../../Common/Navbar";
import Footer from "../../../Common/Footer";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import reportsData from "../../../../assets/mock/ReportData.json";
import SubscribeForm from "../SubscribeForm";
import { Container, Row, Col } from "react-bootstrap";

const Reports = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(reportsData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="about-Cover1">
        <img
          className="coverpic-About"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_2209,h_1080/https://careernet.in/wp-content/uploads/2022/05/Reports_Banner_edit_v02.jpg"
          alt=""
        />
        <div className="photoTexta">
          Making
          <br />
          insightful analysis
          <br />
          happen
        </div>
      </div>
      <div className="news-blog-header">
        <div className="news-content">
          <h2 className="news-title">Reports</h2>
          <ul className="news-broadcum">
            <li className="news-Link">
              <Link to="/" className="news-Link">
                Home
              </Link>
            </li>
            <li className="news-Link">Thought Centre</li>
            <li className="news-Link">Reports</li>
          </ul>
        </div>
      </div>
      <Container className="newcard-Container">
        <Row>
          {cards.map((card) => (
            <Col key={card.id} md={4} className="mb-4">
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Img variant="top" src={card.imageSrc} />
                <Card.Body>
                  <Link to={`/reports/card/${card.id}`}>
                    <Card.Title>{card.title}</Card.Title>
                  </Link>
                  <Card.Text>
                    <div className="post-excerpt">{card.excerpt}</div>
                  </Card.Text>
                  <Link to={`/reports/card/${card.id}`}>
                    <div className="viewmoreb">
                      <img
                        className="viewBtn"
                        src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                        alt=""
                      />
                      <span className="ReadText">Read More</span>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <SubscribeForm />
      <Footer />
    </div>
  );
};

export default Reports;

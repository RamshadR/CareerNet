import React from "react";
import Navbar from "../Navbar";
import "../ThoughtCenter/News.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Pagination from 'react-bootstrap/Pagination';
import SubscribeForm from "./SubscribeForm";

const News = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img
          className="solution-coverpic"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1920,h_916/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_Thought-center-banner-84.jpg"
          alt=""
        />
        <div className="newsphotoText">
          Making <br />
          waves happen
        </div>
      </div>
      <div className="news-blog-header">
        <div className="news-content">
          <h2 className="news-title">News</h2>
          <ul className="news-broadcum">
            <li className="news-Link">
              <Link to="/" className="news-Link">
                Home
              </Link>
            </li>
            <li className="news-Link">Thought Centre</li>
            <li className="news-Link">News</li>
          </ul>
        </div>
      </div>
      <div className="newcard-Container">
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_400/https://careernet.in/wp-content/uploads/2024/04/CTS-Lede-1024x575-1-400x299.jpg"
          />
          <Card.Body>
            <Card.Title>
              TCS offers quirky titles and little else in recruiting revamp to
              attract 40K hires
            </Card.Title>
            <Card.Text>
              <div class="post-excerpt">
                Like many in south Indian states, folks in parts of Latin
                America affectionately call their grandfather “tata”. That was
                enough for Tata Consultancy Services (TCS) to
                <span class="excerpt-hellip"> […]</span>
              </div>
            </Card.Text>
            <div className="viewmoreb">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="ReadText">Read More</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_300/https://careernet.in/wp-content/uploads/2024/04/Image.webp"
          />
          <Card.Body>
            <Card.Title>
              Dealing with layoffs: How companies and CEOs can handle a messy
              situation with relative ease
            </Card.Title>
            <Card.Text>
              <div class="post-excerpt">
                One of the toughest decisions a CEO has to take is that of
                laying off people. The reasons for layoffs can vary but there is
                a<span class="excerpt-hellip"> […]</span>
              </div>
            </Card.Text>
            <div className="viewmoreb">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="ReadText">Read More</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_400,h_299/https://careernet.in/wp-content/uploads/2024/04/artificial-intelligence-2023-11-27-05-21-19-utc-400x299.jpg"
          />
          <Card.Body>
            <Card.Title>
              Techies with Generative AI skills see a 30-50 percent jump in
              salaries
            </Card.Title>
            <Card.Text>
              <div class="post-excerpt">
                Techies in India are driving up salaries with additional AI,
                Generative AI and adjacent skills, commanding as high as 30- 50
                percent premium over those without
                <span class="excerpt-hellip"> […]</span>
              </div>
            </Card.Text>
            <div className="viewmoreb">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="ReadText">Read More</span>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="newcard-Container">
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_400,h_299/https://careernet.in/wp-content/uploads/2024/01/Jobs_Photo-400x299.jpg"
          />
          <Card.Body>
            <Card.Title>
              Wary firms, candidates on fence slow top-level hiring
            </Card.Title>
            <Card.Text>
              <div class="post-excerpt">
                Senior-level hiring is taking time to hit the bullseye, as
                companies want to scrutinize candidates’ history of competence
                and behaviour over as long as 10 years,
                <span class="excerpt-hellip"> […]</span>
              </div>
            </Card.Text>
            <div className="viewmoreb">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="ReadText">Read More</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_400,h_299/https://careernet.in/wp-content/uploads/2024/02/EC_Gen_AI_08_Technology_750-400x299.jpg"
          />
          <Card.Body>
            <Card.Title>
              How Women are reshaping male-dominated tech industries in India
              Inc.
            </Card.Title>
            <Card.Text>
              <div class="post-excerpt">
                For decades, the growing tech industry in India has been
                predominantly shaped by male professionals, leading to a glaring
                gender disparity across all levels. But there
                <span class="excerpt-hellip"> […]</span>
              </div>
            </Card.Text>
            <div className="viewmoreb">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="ReadText">Read More</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_400,h_299/https://careernet.in/wp-content/uploads/2024/03/Building-a-psychologically-safe-workplace-for-a-diverse-workforce-400x299.jpg"
          />
          <Card.Body>
            <Card.Title>
              ‘Women’s participation in workforce jumps to 37%’
            </Card.Title>
            <Card.Text>
              <div class="post-excerpt">
                The participation of women in the workforce has increased to 37%
                in the 2022-23 financial year, a sharp increase from 23.3% in
                the 2017-18 financial year,
                <span class="excerpt-hellip"> […]</span>
              </div>
            </Card.Text>
            <div className="viewmoreb">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="ReadText">Read More</span>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="newcard-Container">
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_300/https://careernet.in/wp-content/uploads/2024/03/1.webp"
          />
          <Card.Body>
            <Card.Title>
              India becomes the darling of expat techies as West takes a break
            </Card.Title>
            <Card.Text>
              <div class="post-excerpt">
                With India showing more resilience than the US and Europe to the
                global tech slowdown, an increasing number of Indian expatriates
                employed in the sector are
                <span class="excerpt-hellip"> […]</span>
              </div>
            </Card.Text>
            <div className="viewmoreb">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="ReadText">Read More</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_400,h_299/https://careernet.in/wp-content/uploads/2023/12/IIT-placements-dip-400x299.jpg"
          />
          <Card.Body>
            <Card.Title>
              Breather for colleges as IT companies ready offers for class of
              2024
            </Card.Title>
            <Card.Text>
              <div class="post-excerpt">
                In a slight reprieve to engineering colleges grappling with one
                of the worst-ever placement seasons, top software services
                exporters such as Tata Consultancy Services (TCS), HCLTech
                <span class="excerpt-hellip"> […]</span>
              </div>
            </Card.Text>
            <div className="viewmoreb">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="ReadText">Read More</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_400/https://careernet.in/wp-content/uploads/2024/02/about-98-skilled-employees-seeking-new-jobs-despite-hiring-slowdown-400x299.webp"
          />
          <Card.Body>
            <Card.Title>
              Startup recruiters find few takers amid overall hiring slowdown
            </Card.Title>
            <Card.Text>
              <div class="post-excerpt">
                Scores of recruitment professionals, who joined recruitment
                teams of startups at astronomical hikes to drive the
                post-pandemic hiring frenzy, are now struggling to find jobs for
                <span class="excerpt-hellip"> […]</span>
              </div>
            </Card.Text>
            <div className="viewmoreb">
              <img
                className="viewBtn"
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/09/arrow-right.jpg"
                alt=""
              />
              <span className="ReadText">Read More</span>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="paging">
      <Pagination className="paging">
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Item>{7}</Pagination.Item>
      <Pagination.Item>{8}</Pagination.Item>
      <Pagination.Item>{9}</Pagination.Item>
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item>{14}</Pagination.Item>
      <Pagination.Item>{15}</Pagination.Item>
      <Pagination.Item>{16}</Pagination.Item>
      <Pagination.Item>{17}</Pagination.Item>
      <Pagination.Item>{18}</Pagination.Item> 
      <Pagination.Item>{19}</Pagination.Item>
      <Pagination.Next>Next page</Pagination.Next>
    </Pagination>
    </div>
     <SubscribeForm/>
      <Footer />
    </div>
  );
};

export default News;

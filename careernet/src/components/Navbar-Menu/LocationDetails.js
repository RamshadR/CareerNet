import React, { useState } from "react";
import "../Navbar-Menu/LocationDetails.css";

const LocationDetails = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedStates, setSelectedStates] = useState("Bangalore");

  return (
    <div className="location-container">
      <h3 className="map-title">
        <span>Where</span> <i> borderless hiring happens</i>
      </h3>
      <div className="top-LocationBtns">
        <button
          className="top-LocationBtn"
          onClick={() => setSelectedCountry("India")}
        >
          India
        </button>
        <button
          className="top-LocationBtn"
          onClick={() => setSelectedCountry("USA")}
        >
          USA
        </button>
      </div>
      {selectedCountry === "India" && (
        <div>
          <div className="location-btns">
            <button
              className="top-LocationBtn2"
              onClick={() => setSelectedStates("Bangalore")}
            >
              Bangalore
            </button>
            <button
              className="top-LocationBtn2"
              onClick={() => setSelectedStates("Chennai")}
            >
              Chennai
            </button>
            <button
              className="top-LocationBtn2"
              onClick={() => setSelectedStates("Coimbatore")}
            >
              Coimbatore
            </button>
            <button
              className="top-LocationBtn2"
              onClick={() => setSelectedStates("Gurugram")}
            >
              Gurugram
            </button>
            <button
              className="top-LocationBtn2"
              onClick={() => setSelectedStates("Hyderabad")}
            >
              Hyderabad
            </button>
            <button
              className="top-LocationBtn2"
              onClick={() => setSelectedStates("Lucknow")}
            >
              Lucknow
            </button>
            <button
              className="top-LocationBtn2"
              onClick={() => setSelectedStates("Mumbai")}
            >
              Mumbai
            </button>
            <button
              className="top-LocationBtn2"
              onClick={() => setSelectedStates("Noida")}
            >
              Noida
            </button>
            <button
              className="top-LocationBtn2"
              onClick={() => setSelectedStates("Pune")}
            >
              Pune
            </button>
          </div>

          {selectedStates === "Bangalore" && (
            <div className="map-Container">
              <div className="Location-Details">
                <div>
                  <img
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/11/Banglore_Location_web.png"
                    alt=""
                  />
                </div>
                <h4 className="Location-Name">BANGALORE</h4>
                <p>
                  <b>Careernet</b>
                  <br /> Careernet Campus, Plot No. 53,
                  <br /> Kariyammana Agrahara Road,
                  <br /> Devarabisana Halli(Next to Intel
                  <br /> Junction Flyover),Outer Ring Road,
                  <br /> Bangalore, Karnataka - 560103
                </p>
              </div>
              <div className="map">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.616518050331!2d77.68309331482153!3d12.93235099088169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13a676f7c33b%3A0xfb0bfcc3f7324a9e!2sCareerNet+Technologies+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1519816185583"
                    width="655"
                    height="320"
                    title="Google Maps"
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </p>
                <p className="mapp">
                  <a
                    className="map-bottom-Text"
                    href="https://www.google.com/maps/dir//CareerNet+Technologies+Pvt+Ltd+CareerNet+Campus,Kariyammana+Agrahara+Road+Plot+No.+53,+Outer+Ring+Rd,+next+to+Intel+Junction+Flyover,+Devarabisanahalli+Bengaluru,+Karnataka+560103/@12.9318797,77.686074,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13a676f7c33b:0xfb0bfcc3f7324a9e!2m2!1d77.686074!2d12.9318797"
                    rel="noopener"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          )}
          {selectedStates === "Chennai" && (
            <div className="map-Container">
              <div className="Location-Details">
                <div>
                  <img
                    src="https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_about-us-icon-Chennai.png"
                    alt=""
                  />
                </div>
                <h4 className="Location-Name">CHENNAI</h4>
                <p>
                  <b>Careernet</b>
                  <br /> #301, Indiqube, Brigade Vantage, 2nd
                  <br /> Floor, OMR, Kandanchavadi. Perungudi,
                  <br /> Landmark- Above Decathlon
                  <br /> Chennai, Tamil Nadu - 600096
                </p>
              </div>
              <div className="map">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31104.71694516443!2d80.247987!3d12.966117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de01e7c0101%3A0xa95418f935fee588!2sCareernet!5e0!3m2!1sen!2sin!4v1713842616903!5m2!1sen!2sin"
                    width="655"
                    height="320"
                    title="Google Maps"
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </p>
                <p className="mapp">
                  <a
                    className="map-bottom-Text"
                    href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.242292874948!2d77.68607400000002!3d12.932054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13a676f7c33b%3A0xfb0bfcc3f7324a9e!2sCareernet!5e0!3m2!1sen!2sus!4v1713842475172!5m2!1sen!2sus"
                    rel="noopener"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          )}
          {selectedStates === "Coimbatore" && (
            <div className="map-Container">
              <div className="Location-Details">
                <div>
                  <img
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2022/03/Coimbatore_Icon-1.png"
                    alt=""
                  />
                </div>
                <h4 className="Location-Name">COIMBATORE</h4>
                <p>
                  <b>Careernet</b>
                  <br /> Avinashi Rd, TNHB Colony, Indira
                  <br /> Nagar, Civil Aerodrome Post,
                  <br /> Coimbatore, Tamil Nadu - 641014
                </p>
              </div>
              <div className="map">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7831.9692064705805!2d77.040098!3d11.039781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857ca65c17235%3A0x2c0628b92a3955bc!2sCareernet!5e0!3m2!1sen!2sin!4v1713842923850!5m2!1sen!2sin"
                    width="655"
                    height="320"
                    title="Google Maps"
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </p>
                <p className="mapp">
                  <a
                    className="map-bottom-Text"
                    href="https://www.google.com/maps/dir//CareerNet+Technologies+Pvt+Ltd+CareerNet+Campus,Kariyammana+Agrahara+Road+Plot+No.+53,+Outer+Ring+Rd,+next+to+Intel+Junction+Flyover,+Devarabisanahalli+Bengaluru,+Karnataka+560103/@12.9318797,77.686074,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13a676f7c33b:0xfb0bfcc3f7324a9e!2m2!1d77.686074!2d12.9318797"
                    rel="noopener"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          )}
          {selectedStates === "Gurugram" && (
            <div className="map-Container">
              <div className="Location-Details">
                <div>
                  <img
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_216,h_164/https://careernet.in/wp-content/uploads/2022/07/Gurgaon_Icon_OPT_02_v2.png"
                    alt=""
                  />
                </div>
                <h4 className="Location-Name">GURUGRAM</h4>
                <p>
                  <b>Careernet</b>
                  <br /> IndiQube Vatika, Tower- A,
                  <br /> Vatika Tower,3rd floor,
                  <br /> Golf Course Road,Gurugram,
                  <br /> Haryana - 122003
                </p>
              </div>
              <div className="map">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56133.969758169544!2d77.104828!3d28.438167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fdc4c7d4eb1%3A0x8edbf39ebbc31289!2sCareernet!5e0!3m2!1sen!2sin!4v1713924311747!5m2!1sen!2sin"
                    width="655"
                    height="320"
                    title="Google Maps"
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </p>
                <p className="mapp">
                  <a
                    className="map-bottom-Text"
                    href="https://www.google.com/maps/dir//CareerNet+Technologies+Pvt+Ltd+CareerNet+Campus,Kariyammana+Agrahara+Road+Plot+No.+53,+Outer+Ring+Rd,+next+to+Intel+Junction+Flyover,+Devarabisanahalli+Bengaluru,+Karnataka+560103/@12.9318797,77.686074,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13a676f7c33b:0xfb0bfcc3f7324a9e!2m2!1d77.686074!2d12.9318797"
                    rel="noopener"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          )}
          {selectedStates === "Hyderabad" && (
            <div className="map-Container">
              <div className="Location-Details">
                <div>
                  <img
                    src="https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_about-us-icon-HYDERABAD.png"
                    alt=""
                  />
                </div>
                <h4 className="Location-Name">HYDERABAD</h4>
                <p>
                  <b>Careernet</b>
                  <br /> Indiqube, Ramky Towers, Mindspace Rd,
                  <br /> P Janardhan Reddy Nagar, Gachibowli,
                  <br /> Hyderabad, Telangana - 500032
                </p>
              </div>
              <div className="map">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30449.95363917197!2d78.365503!3d17.448022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93063f38446d%3A0x30d454660b85444!2sCareernet!5e0!3m2!1sen!2sin!4v1713924549599!5m2!1sen!2sin"
                    width="655"
                    height="320"
                    title="Google Maps"
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </p>
                <p className="mapp">
                  <a
                    className="map-bottom-Text"
                    href="https://www.google.com/maps/dir//CareerNet+Technologies+Pvt+Ltd+CareerNet+Campus,Kariyammana+Agrahara+Road+Plot+No.+53,+Outer+Ring+Rd,+next+to+Intel+Junction+Flyover,+Devarabisanahalli+Bengaluru,+Karnataka+560103/@12.9318797,77.686074,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13a676f7c33b:0xfb0bfcc3f7324a9e!2m2!1d77.686074!2d12.9318797"
                    rel="noopener"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          )}
          {selectedStates === "Lucknow" && (
            <div className="map-Container">
              <div className="Location-Details">
                <div>
                  <img
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_216,h_164/https://careernet.in/wp-content/uploads/2022/07/Lucknow_Icon_OPT_02_v2.png"
                    alt=""
                  />
                </div>
                <h4 className="Location-Name">LUCKNOW</h4>
                <p>
                  <b>Careernet</b>
                  <br /> Summit Space, 12 Floor, Summit Building,
                  <br /> A-Wing, TCG 3/3, Vibhuti Khand, Gomti
                  <br /> Nagar, Lucknow, Uttar Pradesh - 226010
                </p>
              </div>
              <div className="map">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28473.46987711542!2d81.010714!3d26.865903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3f582f285fd%3A0x8ba1098ead13e74e!2sCareernet!5e0!3m2!1sen!2sin!4v1713924767998!5m2!1sen!2sin"
                    width="655"
                    height="320"
                    title="Google Maps"
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </p>
                <p className="mapp">
                  <a
                    className="map-bottom-Text"
                    href="https://www.google.com/maps/dir//CareerNet+Technologies+Pvt+Ltd+CareerNet+Campus,Kariyammana+Agrahara+Road+Plot+No.+53,+Outer+Ring+Rd,+next+to+Intel+Junction+Flyover,+Devarabisanahalli+Bengaluru,+Karnataka+560103/@12.9318797,77.686074,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13a676f7c33b:0xfb0bfcc3f7324a9e!2m2!1d77.686074!2d12.9318797"
                    rel="noopener"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          )}
          {selectedStates === "Mumbai" && (
            <div className="map-Container">
              <div className="Location-Details">
                <div>
                  <img
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img/https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_about-us-icon-Mumbai.png"
                    alt=""
                  />
                </div>
                <h4 className="Location-Name">MUMBAI</h4>
                <p>
                  <strong>Careernet</strong>
                  <br /> Unit office no 201, 2nd floor,
                  <br /> town centre, commercial premises,
                  <br /> Cooperative Society Ltd,
                  <br /> Andheri Kurla road, Village marol,
                  <br /> Andheri, Mumbai - 400059
                </p>
              </div>
              <div className="map">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3860497.8079061327!2d72.883209!3d19.106893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a2c4443e07%3A0xab899346e92d9974!2sCareernet!5e0!3m2!1sen!2sin!4v1713924986244!5m2!1sen!2sin"
                    width="655"
                    height="320"
                    title="Google Maps"
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </p>
                <p className="mapp">
                  <a
                    className="map-bottom-Text"
                    href="https://www.google.com/maps/dir//CareerNet+Technologies+Pvt+Ltd+CareerNet+Campus,Kariyammana+Agrahara+Road+Plot+No.+53,+Outer+Ring+Rd,+next+to+Intel+Junction+Flyover,+Devarabisanahalli+Bengaluru,+Karnataka+560103/@12.9318797,77.686074,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13a676f7c33b:0xfb0bfcc3f7324a9e!2m2!1d77.686074!2d12.9318797"
                    rel="noopener"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          )}
          {selectedStates === "Noida" && (
            <div className="map-Container">
              <div className="Location-Details">
                <div>
                  <img
                    src="https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_about-us-icon-Noida.png"
                    alt=""
                  />
                </div>
                <h4 className="Location-Name">NOIDA</h4>
                <p>
                  <b>Careernet</b>
                  <br /> Indiqube, 9th Floor, Tower B, Logix
                  <br /> Cyber Park, Plot C, 28 and 29th,
                  <br /> Sector 62, Noida, Uttar Pradesh - 201309
                </p>
              </div>
              <div className="map">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7005.165077885385!2d77.366239!3d28.612298000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55790a58a59%3A0xdb1db38da0f95947!2sCareernet!5e0!3m2!1sen!2sin!4v1713925172051!5m2!1sen!2sin"
                    width="655"
                    height="320"
                    title="Google Maps"
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </p>
                <p className="mapp">
                  <a
                    className="map-bottom-Text"
                    href="https://www.google.com/maps/dir//CareerNet+Technologies+Pvt+Ltd+CareerNet+Campus,Kariyammana+Agrahara+Road+Plot+No.+53,+Outer+Ring+Rd,+next+to+Intel+Junction+Flyover,+Devarabisanahalli+Bengaluru,+Karnataka+560103/@12.9318797,77.686074,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13a676f7c33b:0xfb0bfcc3f7324a9e!2m2!1d77.686074!2d12.9318797"
                    rel="noopener"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          )}
          {selectedStates === "Pune" && (
            <div className="map-Container">
              <div className="Location-Details">
                <div>
                  <img
                    src="https://careernet.in/wp-content/uploads/2021/10/Website-Stuff_about-us-icon-Pune.png"
                    alt=""
                  />
                </div>
                <h4 className="Location-Name">PUNE</h4>
                <p>
                  <b>Careernet</b>
                  <br /> IndiQube Park Plaza, 465/C1,CTS-1085,
                  <br /> Ganesh Khind Road,Akashvani Rashtriya
                  <br /> Film, Sangrahalay Quarters, Model
                  <br /> Colony, Shivajinagar, Pune,
                  <br /> Maharashtra - 411005
                </p>
              </div>
              <div className="map">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7565.736719253955!2d73.838089!3d18.53485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf09b5dbe375%3A0x21151c49d182a27b!2sCareernet!5e0!3m2!1sen!2sin!4v1713925347386!5m2!1sen!2sin"
                    width="655"
                    height="320"
                    title="Google Maps"
                    frameborder="0"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </p>
                <p className="mapp">
                  <a
                    className="map-bottom-Text"
                    href="https://www.google.com/maps/dir//CareerNet+Technologies+Pvt+Ltd+CareerNet+Campus,Kariyammana+Agrahara+Road+Plot+No.+53,+Outer+Ring+Rd,+next+to+Intel+Junction+Flyover,+Devarabisanahalli+Bengaluru,+Karnataka+560103/@12.9318797,77.686074,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae13a676f7c33b:0xfb0bfcc3f7324a9e!2m2!1d77.686074!2d12.9318797"
                    rel="noopener"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {selectedCountry === "USA" && (
        <div>
          <div className="location-btns">
            <button className="top-LocationBtn2">Delaware</button>
          </div>
          <div className="map-Container">
            <div className="Location-Details">
              <div>
                <img
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_216,h_164/https://careernet.in/wp-content/uploads/2022/07/Delaware_Capitol_icon-1.png"
                  alt=""
                />
              </div>
              <h4 className="Location-Name">DELAWARE</h4>
              <p>
                Careernet Consulting Inc.
                <br /> 873, 1007 N Orange St. 4th Floor
                <br /> Wilmington, DE, New Castle, US, 19801
                <br /> Email: global.sales@careernet.in
              </p>
            </div>
            <div className="map">
              <p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d87695.37947378741!2d-75.57545690333512!3d39.74178828775518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd407160f4ef%3A0x8548ae47d587e42d!2s1007%20Orange%20St%204th%20floor%2C%20Wilmington%2C%20DE%2019801!5e0!3m2!1sen!2sus!4v1713840684849!5m2!1sen!2sus"
                  width="655"
                  height="320"
                  title="Google Maps"
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </p>
              <p className="mapp">
                <a
                  className="map-bottom-Text"
                  href="https://maps.googleapis.com/maps/api/js?client=google-maps-embed&paint_origin=&libraries=geometry,search&v=weekly&language=en_US&callback=onApiLoad"
                  rel="noopener"
                >
                  View on Map
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDetails;

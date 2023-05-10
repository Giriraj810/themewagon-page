import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaChevronRight, FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
  const MainFooter = styled.footer`
    background-color: #181d38;
    position: relative;
    height: 40rem;
    width: 100%;
    margin-top: 46rem;
    padding: 0 11rem;
    .main {
      display: flex;
      position: relative;
      padding: 6rem 0.5rem 0 0.5rem;


      justify-content: space-between;
      align-items: center;
      border: 1px solid white;

      .quick-link,
      .contact,.gallery,.newsletter {
        border:1px solid red;
        width:25%;
        height:20rem;
        h3 {
          color: white;
          background-color: #pink;
          font-size: 2.5rem;
          font-weight: 800;
          padding: 0.5rem 0;
        }
        p {
          color: #fff;
          padding-block: 0.5rem;
        }
        .col-1{
          display:flex;
          float:left;
          ]
        }
        .socialmedia {
          * {
            margin-inline: 0.25rem;
          }
          *:hover {
            background-color: #fff;
            fill: #181d38;
          }
        }
        img{
        height:6rem;
        padding:0.25rem;
        }
        .email-signup{
          width:25%;
          display:flex;
          float:left;
        input{
          width:17rem;
        }
        button{
          padding:1rem 0rem;
        }
        }

        a {
          font-size: 1.5rem;
          font-weight: 550;
          padding-block: 0.5rem;
          color: #fff;
          display: block;
          transition: letter-spacing 0.3s ease-in;
        }

        a:hover {
          letter-spacing: 0.5px;
        }
      }
    }
  `;

  return (
    <MainFooter>
      <div className="main">
        <div className="quick-link">
          <h3>Quick Link</h3>
          <NavLink to="/">
            <FaChevronRight /> About Us
          </NavLink>
          <NavLink to="/">
            <FaChevronRight /> Contact Us
          </NavLink>
          <NavLink to="/">
            <FaChevronRight /> Privacy Policy
          </NavLink>
          <NavLink to="/">
            <FaChevronRight /> Terms & Condition
          </NavLink>
          <NavLink to="/">
            <FaChevronRight /> FAQs & Heshdhgdp
          </NavLink>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <p>
            <FaMapMarkerAlt style={{ fill: "#fff" }} /> &nbsp;123 Street, New
            York, USA
          </p>
          <p>
            <FaPhoneAlt style={{ fill: "#fff" }} /> &nbsp;+012 345 67890
          </p>
          <p>
            <FaEnvelope style={{ fill: "#fff" }} /> &nbsp;info@example.com
          </p>
          <div className="socialmedia">
            <FaTwitter
              size={40}
              style={{
                fill: "#fff",
                border: "1px solid #fff",
                padding: "7",
                borderRadius: "50%",
              }}
            />
            <FaFacebookF
              size={40}
              style={{
                fill: "#fff",
                border: "1px solid #fff",
                padding: "7",
                borderRadius: "50%",
              }}
            />
            <FaYoutube
              size={40}
              style={{
                fill: "#fff",
                border: "1px solid #fff",
                padding: "7",
                borderRadius: "50%",
              }}
            />
            <FaLinkedinIn
              size={40}
              style={{
                fill: "#fff",
                border: "1px solid #fff",
                padding: "4",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
        <div className="gallery">
          <h3>Gallery</h3>
          <div className="col-1"> 
            <img src="./images/course-1.jpg" alt="course-1" />
            <img src="./images/course-2.jpg" alt="course-2" />
            <img src="./images/course-3.jpg" alt="course-3" />
          </div>
          <div className="col-1">
            <img src="./images/course-1 (1).jpg" alt="course-4" />
            <img src="./images/course-2 (1).jpg" alt="course-5" />
            <img src="./images/course-3 (1).jpg" alt="course-6" />
          </div>
        </div>
        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="email-signup">
            <input type="email" placeholder="Your E-Mail" name="email" />
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </div>
    </MainFooter>
  );
};

export default Footer;

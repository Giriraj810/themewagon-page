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
    margin-top: 56rem;
    padding: 0 11rem;
    .main {
      display: flex;
      position: relative;
      padding: 6rem 0.5rem 0 0.5rem;

      justify-content: space-between;
      align-items: center;

      .quick-link,
      .contact,
      .gallery,
      .newsletter {
        width: 25%;
        height: 20rem;
        padding-right: 2rem;
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
        .col-1 {
          display: flex;
          float: left;
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
        img {
          height: 6rem;
          padding: 0.5rem;
        }
        .email-signup {
          display: flex;
          float: left;
          input {
            width: 18rem;
          }
          button {
            background-color: #ee3524;
            color: #fff;
            font-weight: 1000;
            border: none;
            padding-inline: 2rem;
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
    .copyright {
      display:flex;
      float:left;
      margin-block: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      .left{
        p{
        color:#fff;
          a{
          color:#fff;
          text-decoration:underline;
          }
        }
      }
      .right{
        align-items:center;
        ul{
          display:flex;
          float:left;
          li{
            border-inline:1px rgba(255,255,255,0.1);
            a{
              color:#fff;

            }
          }
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
            <input type="email" placeholder="Your email" name="email" />
            <button type="submit">SignUp</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="left">
          <p>
            &copy;<NavLink>Your Site Name</NavLink>, All Right Reserved.
            Designed By HTML WIZARD
          </p>
          <p>
            Distributed By<NavLink>ThemeWagon</NavLink>
          </p>
        </div>
        <div className="right">
          <ul>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Cookies</NavLink>
            </li>
            <li>
              <NavLink>Help</NavLink>
            </li>
            <li>
              <NavLink>FAQs</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </MainFooter>
  );
};

export default Footer;

import React from "react";
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";

const Contact = () => {
  const Contact = styled.section`
  position:relative;
    .carousel-1 {
      width: 100%;
      height: 320px;
      position: relative;
      z-index: 2;
      background: linear-gradient(rgba(24, 29, 56, 0.7), rgba(24, 29, 56, 0.7)),
        url(../images/carousel-1.jpg);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      .carousel-content {
        width: 30%;
        top: 26%;
        left: 35%;
        position: relative;
        z-index: 999;
        color: #fff;
        h1 {
          color: #fff;
          font-weight: 800;
          font-size: 6.5rem;
          text-align: center;
        }
        h3 {
          color: #fff;
          font-weight: 500;
          font-size: 1.5rem;
          text-align: center;
        }
      }
    }
    .contact {
      padding: 0 11rem;
      margin-top: 9rem;
      .contact-title {
        color: #ee3524;
        position:relative;
        font-size: 1.8rem;
        text-align: center;
        font-weight: 900;
        .unde {
          text-decoration: underline;
          font-weight: 900;
          font-size: 3rem;
        }
        .st {
          text-decoration: line-through;
          font-weight: 900;
          font-size: 3rem;
        }
      }
    }
    .contact-main {
      padding-top: 4rem;
      position: relative;
      display:flex;
      float:left;
      .contact-address,
      .contact-map {
        width: 33%;
        padding-left: 1rem;
      
        h3 {
          font-size: 2rem;
          font-weight: bolder;
        }
        p {
          padding: 0.75rem 0;
        }
        .address-detail {
          display: flex;
          float: left;
          padding: 1.5rem 0;
          h3 {
            color: #ee3524;
            padding: 0 1rem;
          }
          p {
            padding: 0 1rem;
          }
        }

      }
      .contact-form{
        width:33%;
        input,textarea{
          margin:1rem;
        }
        button{
          background-color:#ee3524;
          padding:1rem 17rem;
          margin:1rem;
          color:#fff;
          font-weight:700;
          border:none;
        }

      }
    }
  `;
  return (
    <Contact>
      <div className="carousel-1">
        <div className="carousel-content">
          <h1>Contact</h1>
          <h3>
            Home &nbsp; &nbsp;/ &nbsp;&nbsp; Pages &nbsp;&nbsp; / &nbsp;&nbsp;
            Contact
          </h3>
        </div>
      </div>
      <div className="contact">
        <div className="contact-title">
          <span className="unde">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="st">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp; Contact Us &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="unde">
            <span className="st">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <h2>Contact For Any Query</h2>
        </div>
        <div className="contact-main">
          <div className="contact-address">
            <h3>Get In Touch</h3>
            <p>
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.
              <NavLink>Download Now</NavLink>.
            </p>
            <div className="address-detail">
              <FaMapMarkerAlt
                size={50}
                style={{ padding: "13", fill: "white", background: "#ee3524" }}
              />
              <div>
                <h3>Office</h3>

                <p>123 Street, New York, USA</p>
              </div>
            </div>
            <div className="address-detail">
              <FaPhoneAlt
                size={50}
                style={{ padding: "13", fill: "white", background: "#ee3524" }}
              />
              <div>
                <h3>Mobile</h3>

                <p>+012 345 67890</p>
              </div>
            </div>

            <div className="address-detail">
              <FaEnvelopeOpen
                size={50}
                style={{ padding: "13", fill: "white", background: "#ee3524" }}
              />
              <div>
                <h3>Email</h3>

                <p>info@example.com</p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              class="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameborder="0"
              style={{height:"400px", border:"0"}}
              allowfullscreen=""
              title="contact-map"
              aria-hidden="false"
              tabindex="0"></iframe>
          </div>
          <div className="contact-form">
            <form>
              <div style={{ display: "flex", float: "left" }} className="row-2">
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="e-mail" placeholder="Your E-Mail" />
              </div>
              <input type="text" name="subject" placeholder="Subject" />
              <br />
              <textarea placeholder="Message" rows={6} cols={50}></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </Contact>
  );
};

export default Contact;

import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css"

const Nav = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
     setIsOpen(!isOpen);
   };

  return (
    <>
      <div className="nav-bar">
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className="nav-link">
              COURSES
            </NavLink>
          </li>
          <li
            className="dropdown-toggle dropdown nav-link"
            onMouseEnter={toggleDropdown}>
            PAGES
            {isOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/team">Our Team</a>
                </li>
                <li>
                  <a href="/testimonial">Our Testimonial</a>
                </li>
                <li>
                  <a href="/404">404 Page</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/contact" className="nav-link">
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link-join">
              Join Now &rarr;
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
  };

export default Nav;

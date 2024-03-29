import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Logo from "./Assets/deeplogics logo1.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const location = useLocation();

  const handleLinkClick = () => {
    setClick(false); // Close the mobile menu
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  const isCapabilitiesActive = location.pathname.startsWith("/Capabilities");
  const isServicesActive = location.pathname.startsWith("/Services");

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <nav className='navbar active'>
          <div className="navbar-con containernav fs-6">
            <Link to="/" className="navbar-logo navbar-icon" onClick={handleLinkClick}>
              <img className="logo" src={Logo} alt="Deeplogics" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={handleLinkClick}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <div className={`dropbtn nav-links dropdown-toggle ${isCapabilitiesActive ? "activated" : ""}`} style={{ cursor: "pointer" }}>Capabilities</div>
                <div className="dropdown-content">
                  <NavLink className="nav-links hov" onClick={handleLinkClick} to="/Penetration">Penetration Testing</NavLink>
                  <NavLink className="nav-links hov" onClick={handleLinkClick} to="/Vulnerability">Vulnerability Assessment</NavLink>
                  <NavLink className="nav-links hov" onClick={handleLinkClick} to="/Cybersecurity">Cybersecurity Solutions</NavLink>
                  <NavLink className="nav-links hov" onClick={handleLinkClick} to="/Native">Native Mobile Solutions</NavLink>
                  <NavLink className="nav-links hov" onClick={handleLinkClick} to="/Wearable">Wearable Technology</NavLink>
                  <NavLink className="nav-links hov" onClick={handleLinkClick} to="/Enterprises">Enterprise Mobility Solutions</NavLink>
                </div>
              </li>

              <li className="nav-item dropdown">
                <div className={`dropbtn nav-links dropdown-toggle ${isServicesActive ? "activated" : ""}`} style={{ cursor: "pointer" }}>Services</div>
                <div className="dropdown-content">
                  <NavLink className="nav-links hov" onClick={handleLinkClick} to="/Energy">Deeplogics Energy</NavLink>
                  <NavLink className="nav-links hov" onClick={handleLinkClick} to="/Technologies">Deeplogics Technologies</NavLink>
                  <NavLink className="nav-links hov" onClick={handleLinkClick} to="/Logistics">Deeplogics Logistics</NavLink>
                  <NavLink className="nav-links hov" onClick={handleLinkClick} to="/Financial">Deeplogics Financial</NavLink>
                </div>
              </li>
              

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={handleLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

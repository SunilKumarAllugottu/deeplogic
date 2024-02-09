import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Logo from "./Assets/deeplogics logo1.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const location = useLocation();

  // Check if the current path starts with "/Capabilities"
  const isCapabilitiesActive = location.pathname.startsWith("/Capabilities");
  const isServicesActive = location.pathname.startsWith("/Services");

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <nav className='navbar active'>
          <div className="navbar-con containernav fs-6">
            <Link to="/" className="navbar-logo navbar-icon" onClick={closeMobileMenu}>
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
                  onClick={closeMobileMenu}
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
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <div className={`dropbtn nav-links dropdown-toggle ${isCapabilitiesActive ? "activated" : ""}`} style={{ cursor: "pointer" }}>Capabilities</div>
                <div className="dropdown-content">
                  <NavLink className="nav-links hov" onClick={closeMobileMenu} to="/Capabilities/Penetration">Penetration Testing</NavLink>
                  <NavLink className="nav-links hov" onClick={closeMobileMenu} to="/Capabilities/Vulnerability">Vulnerability Assessment</NavLink>
                  <NavLink className="nav-links hov" onClick={closeMobileMenu} to="/Capabilities/Cybersecurity">Cybersecurity Solutions</NavLink>
                  <NavLink className="nav-links hov" onClick={closeMobileMenu} to="/Capabilities/Native">Native Mobile Solutions</NavLink>
                  <NavLink className="nav-links hov" onClick={closeMobileMenu} to="/Capabilities/Wearable">Wearable Technology</NavLink>
                  <NavLink className="nav-links hov" onClick={closeMobileMenu} to="/Capabilities/Enterprises">Enterprise Mobility Solutions</NavLink>
                </div>
              </li>

              <li className="nav-item dropdown">
                <div className={`dropbtn nav-links dropdown-toggle ${isServicesActive ? "activated" : ""}`} style={{ cursor: "pointer" }}>Services</div>
                <div className="dropdown-content">
                  <NavLink className="nav-links hov" onClick={closeMobileMenu} to="/Services/Energy">Deeplogics Energy</NavLink>
                  <NavLink className="nav-links hov" onClick={closeMobileMenu} to="/Services/Technologies">Deeplogics Technologies</NavLink>
                  <NavLink className="nav-links hov" onClick={closeMobileMenu} to="/Services/Logistics">Deeplogics Logistics</NavLink>
                  <NavLink className="nav-links hov" onClick={closeMobileMenu} to="/Services/Financial">Deeplogics Financial</NavLink>
                </div>
              </li>
              

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
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

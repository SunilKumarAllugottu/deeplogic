import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import Logo from "./Assets/logoo png.png"


const Navbar = () =>{
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  // const [navbar,setNavbar] = useState(false);
  // const changeBackground =() =>{
  //   if(window.scrollY>=60) {
  //    setNavbar(true)
  //   }
  //   else{
  //     setNavbar(false)
  //   }
  // }
  // window.addEventListener('scroll',changeBackground);

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        {/* <nav className={navbar?'navbar active':"navbar"}> */}
        <nav className='navbar active'>
          <div className="navbar-con containernav fs-6">
            <Link to="/" className="navbar-logo navbar-icon" onClick={closeMobileMenu}>
              <img class="png" src={Logo}alt="Deeplogics"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
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
             
              
              <li className="nav-item dropdown " >
                                <div className=" nav-links dropdown-toggle" style={{cursor:"pointer"}}>Capabilities</div>
                                <div className="dropdown-content">
                                  <NavLink  className="nav-links hov" onClick={closeMobileMenu} to="/Capabilities/Cybersecurity">Cybersecurity Solutions</NavLink>
                                  <NavLink  className="nav-links hov" onClick={closeMobileMenu}  to="/Capabilities/Native">Native Mobile Solutions</NavLink>
                                  <NavLink  className="nav-links hov" onClick={closeMobileMenu}  to="/Capabilities/Wearable">Wearable Technology</NavLink>
                                  <NavLink  className="nav-links hov" onClick={closeMobileMenu}  to="/Capabilities/Enterprises">Enterprise Mobilty Solutions</NavLink>
                                </div>

              </li>



              <li className="nav-item dropdown " >
                                <div class=" nav-links dropdown-toggle"style={{cursor:"pointer"}}>Services</div>
                                <div class=" dropdown-content ">
                                  <NavLink  className="nav-links hov" onClick={closeMobileMenu}  to="/Services/Energy">Deeplogics Energy</NavLink>
                                  <NavLink  className="nav-links hov" onClick={closeMobileMenu}  to="/Services/Technologies">Deeplogics Technologies</NavLink>
                                  <NavLink  className="nav-links hov" onClick={closeMobileMenu}  to="/Services/Logistics">Deeplogics Logistics</NavLink>
                                  <NavLink  className="nav-links hov" onClick={closeMobileMenu}  to="/Services/Finantial">Deeplogics Finantial</NavLink>
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

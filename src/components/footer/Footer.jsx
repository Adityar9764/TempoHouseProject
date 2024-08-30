import React from "react"
import logo from '../../images/logo.jpg';
import './Footer.css'
import { location, phone, email } from "../../utils/Icons";


const Footer = () => {
  return (<div className="complete-footer">
    <div className="footer-logo">
          <img src={logo} alt="" className="logo" />
       </div>
    <div className="footer">
       <div className="footer-details">
          <div className="address">
            <span><b>Address: </b></span>
          <a href="https://www.google.com/maps/dir/26.9402044,80.9318324/13.0627095,80.2669808/@20.0030751,79.6595371,6z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D" target="/"> {location} No 37 GP Road Chennai 600002 <br />
          Godown adress No 58/54 Mir <br /> Bakshi Ali Street Royapettah Chennai 14</a></div>
          <div className="quick-links">
            <ul>
              <li><b>Quick links</b></li>
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
            <div className="contact-details">
            <span><b>Contact Details</b></span>
            <ul>
              <li>{phone} 7947105090</li>
              <li>{email} sample@gmail.com</li>
            </ul>
          </div>
          </div>
       </div>
    </div>
    <div className="footer-copyright">
      <div><b>&copy;2024 Tempo House</b></div> 
      <div><span>
          Privacy Policy | Terms & Conditions
        </span></div>
    </div>
    </div>
  )
}

export default Footer
import React from "react"
import logo from '../../images/logo.jpg';
import './Footer.css'

const Footer = () => {
  return (<div className="complete-footer">
    <div className="footer-logo">
          <img src={logo} alt="" className="logo" />
       </div>
    <div className="footer">
       <div className="footer-details">
          <div className="address">
            <span><b>Address: </b></span>
            No 37 GP Road Chennai 600002 <br />
          Godown adress No 58/54 Mir <br /> Bakshi Ali Street Royapettah Chennai 14</div>
          <div className="quick-links">
            <ul>
              <li><b>Quick links</b></li>
              <li>Home</li>
              <li>Contact Us</li>
              <li>About</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="contact-details">
            <span><b>Contact Details</b></span>
            <ul>
              <li>98192891002</li>
              <li>sample@gmail.com</li>
            </ul>
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
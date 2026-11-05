import React from 'react'

import {FaFacebook,FaInstagram,FaWhatsapp,FaYoutube} from 'react-icons/fa'

function Footer(){

let socialIcons=[FaFacebook,FaInstagram,FaWhatsapp,FaYoutube];

let date=new Date();

let currentDate=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;


  return (
     <>
    <div id="footer-container" >
        <div>
            <h3>About Novamed Health</h3>
            <p>Hospital Overview</p>
            <p>Mission & Vision</p>
            <p>Our Leadership</p>
            <p>Infrastructure & Technology</p>
            <p>Career</p>
        </div>
        <div>
            <h3>Find Hospital</h3>
            <p>Kolkata</p>
            <p>Chennai</p>
            <p>Bangalore</p>
            <p>Lucknow</p>
            <p>Mumbai</p>
        </div>
        <div>
             <h3>Department's</h3>
            <p>Orthopaedics</p>
            <p>Neurology & Neurosurgery</p>
            <p>Cardiology</p>
            <p>Gastroenterology</p>
            <p>Plastic Surgery</p>
        </div>
        <div>
            <h3>Contact Us</h3>
            <p><a className="address-info" href="tel:5555599999">&#9742; (555)-5599-999</a></p>
            <p><a className="address-info" href="mailto:jitmishra40@gmail.com">&#9993; MyEmail@Gmail.com</a></p>
            <p></p>
            <h3>Follow Us</h3>
            <div className="social-icons">
                {socialIcons.map((Icon, index) => (
                    <span key={index} className="social-icons">
                        <Icon />
                    </span>
                ))}
            </div>
            <p>{currentDate}</p>
        </div>
    </div>
    <p id="copyright">CopyRight &copy; 2026, Joy Misra- All Right Reserved</p>
    </>
  )
}

export default Footer
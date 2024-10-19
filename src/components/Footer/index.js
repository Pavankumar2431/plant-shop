import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './index.css'; // Assuming you store your CSS here

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-columns">
                <div className="footer-column newsletter">
                    <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                    <p>Lorem Ipsum Dolor Sit Amet. Aut Ipsum Illum Et Nostrum Quidem Aut Necesbsus Enim</p>
                    <input type="email" placeholder="Enter Your Email Address" className="newsletter-input" />
                    <button className="subscribe-button">SUBSCRIBE</button>
                </div>
                <div className="footer-column about">
                    <h4>ABOUT US</h4>
                    <ul>
                        <li>Our Story</li>
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Help & Support</li>
                    </ul>
                </div>
                <div className="footer-column services">
                    <h4>OUR SERVICES</h4>
                    <ul>
                        <li>Book Maali</li>
                        <li>Plant Day Care</li>
                        <li>Rent Plants</li>
                        <li>Plants & Pots</li>
                        <li>Gardening Tools</li>
                    </ul>
                </div>
                <div className="footer-column useful-links">
                    <h4>USEFUL LINKS</h4>
                    <ul>
                        <li>My Account</li>
                        <li>Orders & Returns</li>
                        <li>Track Order</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Return, Refund & Replacement Policy</li>
                    </ul>
                </div>
                <div className="footer-column get-in-touch">
                    <h4>GET IN TOUCH</h4>
                    <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
                    <p>Call: +919958287272</p>
                    <p>Email: care@chaperoneplants.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-info">
                    <h4>CHAPERONE</h4>
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                    <div className="social-icons">
                        <FaInstagram size={28} className='icon-button'/>
                        <FaFacebook size={28} className='icon-button'/>
                        <FaSquareThreads size={28} className='icon-button'/>
                        <FaYoutube size={28} className='icon-button'/>
                        <FaLinkedin size={28} className='icon-button'/>
                    </div>
                </div>
                <hr />
            </div>
            <div className="footer-copyright">
                    <p>© 2023, chaperone.com All rights reserved.</p>
                </div>
        </footer>
    );
}

export default Footer;

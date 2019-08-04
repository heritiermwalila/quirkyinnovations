import React from 'react'
import {Link} from 'react-router-dom'
import Innovation from '../assets/images/innovations.png';
import Facebook from '../assets/images/icons/facebook.png'
import Twitter from '../assets/images/icons/twitter.png'
import Linkedin from '../assets/images/icons/linkedin.png'

const Footer = ()=>(
    <div className="footer d-flex align-items-start justify-content-start">
        <div className="footer__left">
            <img src={Innovation} alt="innovation"/>
            <div className="footer__left-info">
                <Link to="mailto:info@innovations.co.za">info@innovations.co.za</Link>
                <Link to="tel:27 21 345 56 78">+27 21 345 56 78</Link>
                <ul className="d-flex aling-items-center justify-content-end">
                    <li><img src={Facebook} alt="facebook"/></li>
                    <li><img src={Twitter} alt="twitter"/></li>
                    <li><img src={Linkedin} alt="linkedin"/></li>
                </ul>
                <p>&copy; 2019 All right reserved Quirky Innovations</p>
            </div>
        </div>
        <div className="footer__right container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer__widget">
                        <h4>Our services</h4>
                        <div className="footer__widget-item">
                            <h6>Web Development</h6>
                            <ul>
                                <li><Link to="/web-application">&raquo; Web Application</Link></li>
                                <li><Link to="/website-design">&raquo; Website Design</Link></li>
                                <li><Link to="/website-design">&raquo; Website Development</Link></li>
                            </ul>
                        </div>
                        <div className="footer__widget-item">
                            <h6>Mobile App</h6>
                            <ul>
                                <li><Link to="/app-design">&raquo; App Design</Link></li>
                                <li><Link to="/app-development">&raquo; App Development</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer__widget">
                        <h4>Our works</h4>
                        <div className="footer__widget-item">
                            <h6>Mobile</h6>
                            <ul>
                                <li><Link to="/app-design">&raquo; Design</Link></li>
                                <li><Link to="/app-development">&raquo; Application</Link></li>
                            </ul>
                        </div>
                        <div className="footer__widget-item">
                            <h6>Web</h6>
                            <ul>
                                <li><Link to="/app-design">&raquo; Design</Link></li>
                                <li><Link to="/app-development">&raquo; Application</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer__widget about-us">
                        <h4>About quirky innovation</h4>
                        <ul>
                            <li><Link to="/about-us">&raquo; About us</Link></li>
                            <li><Link to="/career">&raquo; Career</Link></li>
                            <li><Link to="/our-blogs">&raquo; Blog</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default Footer
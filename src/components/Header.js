import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Alert from '../assets/images/icons/alarm.png'
import MenuIcon from '../assets/images/icons/menu-icon.png'

const Header = ()=>(
    <div className="header">
        <div className="container d-flex align-items-center justify-content-between">
            <div className="menu-container d-flex align-items-center flex-wrap">
                <Link to="/"><img src={Logo} alt="quirky innovation logo"/></Link>
                <ul className="d-flex align-items-center menu-items">
                    <li><button><img src={MenuIcon} alt="menu icon"/></button></li>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/our-services">Services</NavLink></li>
                    <li><NavLink activeClassName="active" to="/our-portofolio">portofolio</NavLink></li>
                    <li><NavLink activeClassName="active" to="/our-clients">Our clients</NavLink></li>
                    
                </ul>
            </div>
            <div className="secondary__menu">
                <ul className="secondary__menu-links d-flex align-items-center">
                    <li><NavLink activeClassName="active" to="/our-blogs">blogs</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact-us">Contact Us</NavLink></li>
                    <li><Link to="/login"><img src={Alert} alt="alert" /></Link></li>
                </ul>
            </div>
        </div>
       
    </div>
)

export default Header
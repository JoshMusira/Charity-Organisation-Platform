import React from 'react'
import '../header/header.css'
import { BsTelephone } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import Subheader from './Subheader/Subheader'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="headerMaterContainer">
            <div className="masterContainer">
                <div className="masterContainer-left">
                    <div className="masterContainer-left-icons">
                        <span><GoMail /></span>
                        <span><FaFacebookF /></span>
                        <span><FaLinkedin /></span>
                        <span><FaTwitter /></span>
                        <span><FaInstagram /></span>
                    </div>
                    <div className="masterContainer-left-phone">
                        <span><BsTelephone /></span>
                        <span> +255 784 469389</span>
                        <span className='middle'>  |  </span>
                        <span>+255 765 449224</span>
                    </div>
                </div>
                <div className="masterContainer">
                    <Link className='more' to='/waystohelp'><span>Ways to help</span></Link>
                    <span className='middle'>  |  </span>
                    <Link className='more' to='/contactus'><span>Contact Us</span></Link>

                </div>

            </div>
            <div className="secondMasterContainer">
                <div className="secondMasterContainer-logo">
                    <div className="logoContainer">
                        <img src={logo} alt="logo" />

                    </div>

                </div>
                <div className="secondMasterContainer-navbar">
                    <Link className='menu active' to="/"> <Subheader title='Home' /></Link>
                    <Link className='menu' to="/events"><Subheader title='Events' /></Link>
                    <Link className='menu' to="/blog"><Subheader title='Blog' /></Link>
                    <Link className='menu' to="/takeaction"><Subheader title='Take Action' /></Link>
                    <Link className='menu' to="/aboutus"><Subheader title='About Us' /></Link>
                    <Link id='donate' to="/donate"><Subheader title='Donate' /></Link>

                    <div className="humberger-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header
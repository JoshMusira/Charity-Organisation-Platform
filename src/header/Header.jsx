import React from 'react'
import '../header/header.css'
import { BsTelephone } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import Subheader from './Subheader/Subheader'
import logo from '../assets/images/logo.png'

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
                        <span>+255 784 469389</span>
                        <span>|</span>
                        <span>+255 765 449224</span>
                    </div>
                </div>
                <div className="masterContainer">
                    <span>Ways to help</span>
                    <span>|</span>
                    <span>Contact Us</span>

                </div>

            </div>
            <div className="secondMasterContainer">
                <div className="secondMasterContainer-logo">
                    <div className="logoContainer">
                        <img src={logo} alt="logo" />

                    </div>

                </div>
                <div className="secondMasterContainer-navbar">
                    <Subheader title='Home' />
                    <Subheader title='What we do' />
                    <Subheader title='Our Projects' />
                    <Subheader title='Take Action' />
                    <Subheader title='About Us' />
                    <Subheader title='Donate' />

                </div>
            </div>
        </div>
    )
}

export default Header
import React from 'react'
import '../aboutus/aboutus.css'
import { GiCupcake, GiLoveMystery } from 'react-icons/gi'
import { MdCleanHands, MdOutlineSchool } from 'react-icons/md'
import { FaHandshake } from 'react-icons/fa'
import mainImage from '../../assets/images/bosa-charity-img4.jpg'
const AboutUs = () => {
    return (
        <div className='aboutusContainer'>
            <div className="aboutImage">
                <h1>About Us</h1>
            </div>
            <div className="workmorecontainer">
                <div className="worktop">
                    <div className="work">
                        We Work In More Than <br /> 7k Countries To <br /> Strengthen Eqaulity
                    </div>
                    <div className="workWords">
                        <p>Aorem ipsum dolor sit amet, consect teturi elit, sed do eiusmod tempor i cididunt ut e span laboris et dolore ma igna aliqua. Ut enim ad minim, qu is nostrud ulla emco laboris nisi ut aliquip ex.</p>
                        <p>Vel nibh at velit scelerisque suscipit Lorem ipsum dolor sit amet, consect etuer adipiscing elit Cdui Duis vel nibh at velit scelerisque suscipit.</p>
                    </div>
                </div>
                <div className="moreicons">
                    <div className="icons">
                        <span className='pic'><FaHandshake /></span>
                        <span>No Poverty</span>
                    </div>
                    <div className="icons">
                        <span className='pic'><MdOutlineSchool /></span>
                        <span>Best Education</span>
                    </div>
                    <div className="icons">
                        <span className='pic'><MdCleanHands /></span>
                        <span>Clean Water</span>
                    </div>
                    <div className="icons">
                        <span className='pic'><GiLoveMystery /></span>
                        <span>Good Health</span>
                    </div>
                    <div className="icons">
                        <span className='pic'><GiCupcake /></span>
                        <span>Nutrition</span>
                    </div>
                </div>
            </div>
            <div className="mainGoal">
                <div className="ourgoal">
                    <div className="border">
                        <h4>Help Is Our Main <br /> Goal!</h4>
                        <p>Mollitia enim! Nisi rerum sagittis lectus delectus incidunt gravida quidem, esse, similique, laudantium bibendum irure, torquent incidunt! Repellat. Urna? Sit sociosqu aperiam asperiores, modi, itaque netus malesuada fringilla iusto ab ullamco voluptates mattis magnis omnis.</p>
                    </div>
                </div>
                <img src={mainImage} alt="" />
            </div>

        </div>
    )
}

export default AboutUs
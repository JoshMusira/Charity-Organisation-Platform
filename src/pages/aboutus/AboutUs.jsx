import React from 'react'
import '../aboutus/aboutus.css'
import { GiCupcake, GiLoveMystery } from 'react-icons/gi'
import { MdCleanHands, MdOutlineSchool } from 'react-icons/md'
import { FaHandshake } from 'react-icons/fa'
import one from '../../assets/images/bosa-charity-img15.png'
import two from '../../assets/images/bosa-charity-img16.png'
import three from '../../assets/images/bosa-charity-img17.png'
import four from '../../assets/images/bosa-charity-img18.png'
import five from '../../assets/images/bosa-charity-img19.png'
import OurTeam from '../../components/ourTeam/OurTeam'
// import mainImage from '../../assets/images/bosa-charity-img4.jpg'
const AboutUs = () => {
    return (
        <div className='aboutusContainer'>
            <div className="aboutImage">
                <h1>About Us</h1>
            </div>
            <div className="workmorecontainer">
                <div className="worktop">
                    <div className="work">
                        We Work In More Than  7k Countries To  Strengthen Eqaulity
                    </div>
                    <div className="workWords">
                        <p>Aorem ipsum dolor sit amet, consect teturi elit, sed do eiusmod tempor i cididunt ut e span laboris et dolore ma igna aliqua. Ut enim ad minim, qu is nostrud ulla emco laboris nisi ut aliquip ex.</p>
                        <br />
                        <p>Vel nibh at velit scelerisque suscipit Lorem ipsum dolor sit amet, consect etuer adipiscing elit Cdui Duis vel nibh at velit scelerisque suscipit.</p>
                    </div>
                </div>
                <div className="moreicons">
                    <div className="icons">
                        <span className='pic'><FaHandshake /></span>
                        <span className='poverty'>No Poverty</span>
                    </div>
                    <div className="icons">
                        <span className='pic'><MdOutlineSchool /></span>
                        <span className='poverty'>Best Education</span>
                    </div>
                    <div className="icons">
                        <span className='pic'><MdCleanHands /></span>
                        <span className='poverty'>Clean Water</span>
                    </div>
                    <div className="icons">
                        <span className='pic'><GiLoveMystery /></span>
                        <span className='poverty'>Good Health</span>
                    </div>
                    <div className="icons">
                        <span className='pic'><GiCupcake /></span>
                        <span className='poverty'>Nutrition</span>
                    </div>
                </div>
            </div>
            <div className="mainGoal">
                <div className="ourgoal">
                    <div className="ouline">
                        <h4>Help Is Our Main <br /> Goal!</h4>
                        <p>Mollitia enim! Nisi rerum sagittis lectus delectus incidunt gravida quidem, esse, similique, laudantium bibendum irure, torquent incidunt! Repellat. Urna? Sit sociosqu aperiam asperiores, modi, itaque netus malesuada fringilla iusto ab ullamco voluptates mattis magnis omnis.</p>
                    </div>
                </div>
                <div className="mainImage">

                    <span>VID</span>
                </div>
            </div>
            <div className="charity">
                <span className='campagn'><img src={one} alt="" /></span>
                <span className='campagn'><img src={two} alt="" /></span>
                <span className='campagn'><img src={three} alt="" /></span>
                <span className='campagn'><img src={four} alt="" /></span>
                <span className='campagn'><img src={five} alt="" /></span>
            </div>
            <div className="wereFunded">
                <span>GET INVOLVED</span>
                <h4>We've Funded 12,503 Charity Projects For 25M </h4>
                <h4> People Around The World</h4>
                <button className="getInvolvedabout">Get Involved Now</button>
            </div>
            <OurTeam />


        </div>
    )
}

export default AboutUs
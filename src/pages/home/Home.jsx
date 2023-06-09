import React from 'react'
import one from '../../assets/images/bosa-charity-img15.png'
import two from '../../assets/images/bosa-charity-img16.png'
import three from '../../assets/images/bosa-charity-img17.png'
import four from '../../assets/images/bosa-charity-img18.png'
import five from '../../assets/images/bosa-charity-img19.png'
import { HiUserGroup } from 'react-icons/hi'
import { FaDonate, FaHandshake } from 'react-icons/fa'

import '../home/home.css'
import GetInvolved from '../../components/getinvolved/GetInvolved'
import HomeAbout from '../../components/homeAbout/HomeAbout'
import RecentCampaign from '../../components/recentcampaign/RecentCampaign'
import TakeAction from '../../components/takeaction/TakeAction'
import UpCommingEvent from '../../components/upcommingevent/UpCommingEvent'
const Home = () => {
    return (
        <>
            <div className='homeContainer'>

                <div className="Home-intro-container">
                    <span className='contribute'>DONATE TO CONTRIBUTE</span>
                    <h3 className='heading'>Lets Build The Better <br /> World Together.</h3>
                    <span className='explanation'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit veniam soluta nulla ab, doloremque voluptatem amet vitae obcaecati nemo fugiat nihil eaque in ipsa? Quae delectus rem sit aut.</span>
                    <div className="buttons">
                        <button className="btn">Donate Fund</button>
                        <button className="read-more">Read More</button>
                    </div>
                </div>
            </div>
            <div class="marquee-container">
                <div class="marquee">
                    <span className='campagn'><img src={one} alt="" /></span>
                    <span className='campagn'><img src={two} alt="" /></span>
                    <span className='campagn'><img src={three} alt="" /></span>
                    <span className='campagn'><img src={four} alt="" /></span>
                    <span className='campagn'><img src={five} alt="" /></span>
                </div>

            </div>

            <div className="getInvolved">
                <div className="involved">
                    <p className='involved-top'>Get Involved</p>
                    <h4 className="involved-bellow">
                        Let's Make A Difference Today
                    </h4>
                </div>
                <div className="components">
                    <GetInvolved icon={<HiUserGroup />} name='Become A Volunteer' explanation='Lorem ipsum dolor sit amet, consectetur adipiscing elit. tenetur maxime  commodo teneture' button='Join Us Now' />
                    <GetInvolved icon={<FaDonate />} name='Donate To Support' explanation='Lorem ipsum dolor sit amet, consectetur adipiscing elit. tenetur maxime  commodo teneture' button='Donate Now' />
                    <GetInvolved icon={<FaHandshake />} name='Become A Partner' explanation='Lorem ipsum dolor sit amet, consectetur adipiscing elit. tenetur maxime  commodo teneture' button='Learn More' />
                </div>
                <HomeAbout />
                <RecentCampaign />
                <TakeAction />
                <UpCommingEvent />
            </div>
        </>
    )
}

export default Home
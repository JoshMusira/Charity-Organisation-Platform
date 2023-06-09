import React from 'react'
import '../homeAbout/homeAbout.css'
import HomeAboutImage from '../../assets/images/bosa-charity-img3.jpg'

const HomeAbout = () => {
    return (
        <div className='HomeAbout'>
            <div className="imagecontainer">
                <img src={HomeAboutImage} alt="" />
                <div className="totalCounter">
                    <div className="counter"><span>15K+</span><span>VOLUNTEER</span></div>
                    <div className="hr-counter">
                        <span className='hr'>|</span>
                        <span className='hr'>|</span>
                        <span className='hr'>|</span>
                        <span className='hr'>|</span>
                    </div>
                    <div className="counter"><span>380+</span><span>SPONSORS</span></div>
                    <div className="hr-counter">
                        <span className='hr'>|</span>
                        <span className='hr'>|</span>
                        <span className='hr'>|</span>
                        <span className='hr'>|</span>
                    </div>
                    <div className="counter"><span>125K+</span><span>BRANCHES</span></div>
                    <div className="hr-counter">
                        <span className='hr'>|</span>
                        <span className='hr'>|</span>
                        <span className='hr'>|</span>
                        <span className='hr'>|</span>
                    </div>
                    <div className="counter"><span>75+</span><span>AWARDS</span></div>
                </div>
            </div>
            <div className="workCntainer">
                <h4>ABOUT US</h4>
                <h5>Our Work Promise To Uphold The Trust Placed</h5>
                <p>Repellendus litora velit irure ea nostrud cum autem, quam. Gravida harum incidunt varius volutpat facilisi purus, eum rerum, hymenaeos sit quaerat dictumst doloremque ultrices impedit, iaculis!</p>
                <div className="experience">
                    <div className="experience-left">
                        <p><span>~</span>Porta tempora facilisi, hac.</p>
                        <p><span>~</span>Beatae hac ultrices, nisi.</p>
                        <p><span>~</span>Incididunt vel inci dunt.</p>
                        <p><span>~</span>Porta tempora facilisi, hac.</p>
                    </div>
                    <div className="experience-right">
                        <span>2<b>8</b></span>
                        <span>YEARS</span>
                        <span>OF EXPERIENCE</span>
                    </div>
                </div>
                <button className='Learn-More'>Learn More</button>

            </div>
        </div >
    )
}

export default HomeAbout
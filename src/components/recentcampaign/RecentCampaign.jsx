import React from 'react'
import '../recentcampaign/recentcampaign.css'
import leftImage from '../../assets/images/bosa-charity-img4.jpg'
import rightImage from '../../assets/images/bosa-charity-img5.jpg'

const RecentCampaign = () => {
    return (
        <div className='mainContainer'>
            <div className="recentCampaign">
                <span>RECENT CAMPAIGN</span>
                <div className="campaign">
                    <h4>Donate To Charity Campaign <br /> Around The World!</h4>
                    <button>View All Campaigns</button>
                </div>

            </div>
            <div className="campaignContainer">
                <div className="campaignContainerLeft">
                    <div className="content">
                        <img src={leftImage} alt="" />
                        <h4>Financial Help For Poor Families</h4>
                        <div className="money">
                            <div className="moneyRised">
                                <span>RAISED</span>
                                <span>$7000</span>
                            </div>
                            <div className="moneyRised">
                                <span>REMAINING</span>
                                <span>$10,000</span>
                            </div>
                            <div className="moneyRised">
                                <span>EXPIRE DATE</span>
                                <span>19 Jun.2021</span>
                            </div>
                        </div>
                        <div className="raised-funds">
                            <span>Raised Funds</span>
                            <span>70%</span>
                        </div>
                        <div className="buttonscampaign">
                            <button className='donate'>Donate Now</button>
                            <button className='details'>Program Details</button>
                        </div>

                    </div>
                </div>
                <div className="campaignContainerLeft">
                    <div className="content">
                        <img src={rightImage} alt="" />
                        <h4>Send Child To School For Education</h4>
                        <div className="money">
                            <div className="moneyRised">
                                <span>RAISED</span>
                                <span>$85000</span>
                            </div>
                            <div className="moneyRised">
                                <span>REMAINING</span>
                                <span>$10,000</span>
                            </div>
                            <div className="moneyRised">
                                <span>EXPIRE DATE</span>
                                <span>19 Jun.2021</span>
                            </div>
                        </div>
                        <div className="raised-funds">
                            <span>Raised Funds</span>
                            <span>85%</span>
                        </div>
                        <div className="buttonscampaign">
                            <button className='donate'>Donate Now</button>
                            <button className='details'>Program Details</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecentCampaign
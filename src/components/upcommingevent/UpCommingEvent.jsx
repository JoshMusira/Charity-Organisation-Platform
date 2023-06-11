import React from 'react'
import '../upcommingevent/upcommingevent.css'
import { CiLocationOn } from 'react-icons/ci'
import { BiTime } from 'react-icons/bi'
const UpCommingEvent = () => {
    return (
        <div className='upcommingEvent'>
            <div className="top">
                <span>UP COMMING EVENTS</span>
                <h4>Come To Our Events For More Info</h4>
            </div>
            <div className="containerEvents">
                <div className="left">
                    <div className="date">
                        <span>15th</span>
                        <span>MAY</span>
                    </div>
                    <div className="middle">
                        <h5>
                            Poor Peoples Donation Campaign</h5>
                        <div className="time">
                            <div className='moretime'>
                                <span className='icon'><BiTime /></span><span>8:00am - 12:30pm</span>
                            </div>
                            <div className='moretime'>
                                <span className='icon'><CiLocationOn /></span><span>
                                    London park, England</span>
                            </div>
                        </div>

                        <p>Hic commodo odio pharetra magni aliquet posuere aptent mus leo class urna. Eum diamlorem, netus posuere aptent mus.</p>

                    </div>
                    <div className="btn">
                        <button className="book">
                            Book Now
                        </button>

                        <button className="details">View Details</button>
                    </div>
                </div>
                <div className="Right">
                    <div className="date">

                        <span>27th</span>
                        <span>JUN</span>


                    </div>
                    <div className="middle">
                        <h5>
                            Boosting Social Chariy NGOs</h5>
                        <div className="time">
                            <div className="moretime">
                                <span className='icon'><BiTime /></span><span>10:00am - 2:30pm</span>

                            </div>
                            <div className="moretime">
                                <span className='icon'><CiLocationOn /></span><span>
                                    San Francisco, USA</span>
                            </div>
                        </div>

                        <p>Hic commodo odio pharetra magni aliquet posuere aptent mus leo class urna. Eum diamlorem, netus posuere aptent mus.</p>

                    </div>
                    <div className="btn">
                        <button className="book">
                            Book Now
                        </button>

                        <button className="details">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpCommingEvent
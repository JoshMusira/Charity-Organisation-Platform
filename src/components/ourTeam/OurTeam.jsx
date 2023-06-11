import React from 'react'
import '../ourTeam/ourteam.css'
import TeamComponet from '../teamComponent/TeamComponet'
import one from '../../assets/images/bosa-charity-img6.jpg'
import two from '../../assets/images/bosa-charity-img8.jpg'
import three from '../../assets/images/3.jpg'
const OurTeam = () => {
    return (
        <div className='OurTeam'>
            <div className="our">
                <span>MEET OUR TEAM</span>
                <h4>Our Optimistic Volunteer</h4>
            </div>
            <div className="volContainer">
                <TeamComponet image={one} director="DIRECTOR" name="Davis Lauren" />
                <TeamComponet image={three} director="VOLUNTEER" name="Jenny White" />

                <TeamComponet image={two} director="VOLUNTEER" name="James Smith" />
            </div>

        </div>
    )
}

export default OurTeam 
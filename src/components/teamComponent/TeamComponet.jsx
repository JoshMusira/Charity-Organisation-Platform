import React from 'react'
import '../teamComponent/teamcomponent.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'


const TeamComponet = ({ image, director, name }) => {
    return (
        <div className='teamComponet'>
            <div className="volunteer"><img src={image} alt="" /></div>
            <div className="containervolunteer">
                <div className="director">
                    <span>{director}</span>
                    <h4>{name}</h4>
                    <p>Esse sociosqu! Nec leo laboriosam molestias. Felis eligen disu scipit.</p>
                </div>
                <div className="directorIcon">
                    <span>{<FaFacebookF />}</span>
                    <span>{<FaTwitter />}</span>
                    <span>{<FaInstagram />}</span>
                </div>
            </div>


        </div>
    )
}

export default TeamComponet
import React from 'react'
import '../getinvolved/getinvolved.css'


const GetInvolved = ({ icon, name, explanation, button }) => {
    return (
        <div className='container-volunteer'>
            <p className="volunteer-icon">{icon}</p>
            <h4 className="volunteer-name">{name}</h4>
            <p className="volunteer-explanation">{explanation}</p>
            <button className='volunteer-btn'>{button}</button>
        </div>
    )
}

export default GetInvolved
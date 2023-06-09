import React from 'react'
import '../takeaction/takeaction.css'

const TakeAction = () => {
    return (
        <div className='mainContainerAction'>
            <div className="mainContainerLeft">
                <h4>CALL TO ACTION</h4>
                <span>Fundraising For The <br /> People And Causes You <br /> Care About</span>
                <p>Senectus elementum fugiat non exercitationem ullamco, <br /> asperiores occaecat placerat maxime laboriosam tortor <br /> voluptates, aenean torquent voluptas pharetra diam.</p>
                <div className="video">
                    <span>vid</span>
                    <h5>PLAY SHORT VIDEO</h5>
                </div>
            </div>
            <div className="mainContainerRight">
                <form >
                    <input type="text" placeholder='Enter Name*' />
                    <input type="email" name="" placeholder='Enter Email*' id="" />
                    <div className="number">
                        <input type="text" placeholder='Enter Phone No.*' />
                        <input type="number" name="" placeholder='Zip Code*' id="" />
                    </div>
                    <button>Get Involved Today</button>
                </form>
            </div>
        </div>
    )
}

export default TakeAction
import React from 'react'

import BackImg3 from '../imgs/background3.svg'
import BackImg4 from '../imgs/background4.svg'
import BackImg5 from '../imgs/background5.svg'
import './CSS/Section3.scss'
const Section3 = () => {
    return (
        <>
            <div className="section3_container">
                <img src={BackImg3} alt="ERROR" className="img1" />
                <img src={BackImg4} alt="ERROR" className="img2" />
                <img src={BackImg5} alt="ERROR" className="img3" />

                <div className="section3_box">
                    <div className="data">
                        <h1> Trading Bot </h1>
                        <hr />
                        <p>
                            <span> Lorem </span>
                            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam sie nonumy eirmod tempor invidunt ut labore et dolore magna aliquyami erat, sed diam voluptua.
                        </p>
                        <p>
                            <span> Lorem </span>
                            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam sie nonumy eirmod tempor invidunt ut labore et dolore magna aliquyami erat, sed diam voluptua.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section3

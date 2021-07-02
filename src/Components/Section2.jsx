import React from 'react'

import BackImg2 from '../imgs/background2.svg'
import CardImg1 from '../imgs/card1.svg'
import CardImg2 from '../imgs/card2.svg'
import CardImg3 from '../imgs/card3.svg'
import './CSS/Section2.scss'
const Section2 = () => {
    return (
        <>
            <div className="section2_container">
                <img src={BackImg2} alt="ERROR" />
                <div className="section2_box">
                    <div className="key">
                        <h1>Key Features</h1>
                        <p>
                            YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting. YFSI is the governance token of YFScience that enables access to an on-chain decision making model.
                        </p>
                    </div>
                    <div className="cards_box">
                        <div className="card">
                            <div className="shadow"></div>
                            <div className="data">
                                <div className="img">
                                    <img src={CardImg1} alt="ERROR" />
                                </div>
                                <div className="detail"> <p> Lorem ipsum dolor sit ads amet, consetetur sadeasd sadipscing elitr, sed diam nonumy asie eirmod lorem tempor invidunt ut labore et de </p></div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="shadow"></div>
                            <div className="data">
                                <div className="img">
                                    <img src={CardImg2} alt="ERROR" />
                                </div>
                                <div className="detail"> <p> Lorem ipsum dolor sit ads amet, consetetur sadeasd sadipscing elitr, sed diam nonumy asie eirmod lorem tempor invidunt ut labore et de </p> </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="shadow"></div>
                            <div className="data">
                                <div className="img">
                                    <img src={CardImg3} alt="ERROR" />
                                </div>
                                <div className="detail"> <p> Lorem ipsum dolor sit ads amet, consetetur sadeasd sadipscing elitr, sed diam nonumy asie eirmod lorem tempor invidunt ut labore et de </p> </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2

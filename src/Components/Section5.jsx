import React from 'react'

import BackImg7 from '../imgs/background7.svg'
import './CSS/Section5.scss'
import Section5CardsMbl from './Section5CardsMbl'

const Section5 = () => {
    return (
        <>
            <div className="section5_container">
                <img src={BackImg7} alt="ERROR" className="back" />
                <div className="heading">
                    <h1> Road Map </h1> <hr />
                </div>
                <div className="data">
                    <div className="card">
                        <h1>Heading</h1>
                        <p className="content">YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting. YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                        <div className="line">
                            <div className="year">2020</div>
                            <p>Q1</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="line">
                            <div className="year">2020</div>
                            <div className="border_down"></div>
                            <p>Q1</p>
                        </div>
                        <h1>Heading</h1>
                        <p className="content">YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting. YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </div>
                    <div className="card">
                        <h1>Heading</h1>
                        <p className="content">YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting. YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                        <div className="line">
                            <div className="year">2020</div>
                            <div className="border_up"></div>
                            <p>Q1</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="line">
                            <div className="year">2020</div>
                            <div className="border_down"></div>
                            <p>Q1</p>
                        </div>
                        <h1>Heading</h1>
                        <p className="content">YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting. YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                    </div>
                    <div className="card">
                        <h1>Heading</h1>
                        <p className="content">YFScience is a new generation decentralised platform that enables different features for staking, lending, trading and coinvesting. YFSI is the governance token of YFScience that enables access to an on-chain decision making model..</p>
                        <div className="line">
                            <div className="year">2020</div>
                            <div className="border_up"></div>
                            <p>Q1</p>
                        </div>
                    </div>
                </div>
                <div className="section5cardmbl">
                    <Section5CardsMbl />
                </div>
            </div>
        </>
    )
}

export default Section5

import React from 'react'


import BackImg6 from '../imgs/background6.svg'
import DashImg from '../imgs/dash.svg'
import './CSS/Section4.scss'

const Section4 = () => {
    return (
        <>
            <div className="section4_container">
                <img src={BackImg6} alt="ERROR" className="backimg" />
                <div className="padding"></div>
                <div className="background">
                    <div className="section3_box">
                        <div className="data">
                            <h1> Application </h1>
                            <hr />
                            <div className="img">
                                <img src={DashImg} alt="ERROR" />
                            </div>
                            <div className="btn">
                                <button>Farm</button>
                            </div>
                            <div className="detail">
                                <p>loLorem ipsum dolor sit amet, consectetur adipisicing elit. Sit recusandae harum cum! Dignissimos, vitae libero nam praesentium dolorum incidunt eaque qui perspiciatis hic cupiditate unde, nulla aspernatur quae, aut at?</p>
                                <p>loLorem ipsum dolor sit amet, consectetur adipisicing elit. Sit recusandae harum cum! Dignissimos, vitae libero nam praesentium dolorum incidunt eaque qui perspiciatis hic cupiditate unde, nulla aspernatur quae, aut at?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4

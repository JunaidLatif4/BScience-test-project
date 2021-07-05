import React from 'react'


import BackImg8 from '../imgs/background8.svg'
import BackImg9 from '../imgs/background9.png'
import './CSS/Section6.scss'
const Section6 = () => {
    return (
        <>
        <div className="section6_container">
            <img src={BackImg8} alt="ERROR" className="back"/>
            <img src={BackImg9} alt="ERROR" className="png"/>
            <div className="data">
                <h1>Ready</h1>
                <p> To start farming on BSC and Eth? </p>
                <button> Join Now </button>
            </div>
        </div>
        </>
    )
}

export default Section6

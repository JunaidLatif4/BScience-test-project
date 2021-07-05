import React from 'react'
import { NavLink } from "react-router-dom"

import Logo from '../imgs/logo.png'

import MblHeader from './MobileHeader'

import './CSS/Header.scss'
const Header = () => {

    return (
        <>
            <div className="header_container" id="scroll">
                <div className="header_box">
                    <div className="header_data">
                        <div className="logo">
                            <img src={Logo} alt="EOOR" />
                        </div>
                        <nav className="nav">
                            <NavLink to="/" className="navlink"> Key Features </NavLink>
                            <NavLink to="/" className="navlink"> Tokenomics </NavLink>
                            <NavLink to="/" className="navlink"> Roadmap </NavLink>
                            <NavLink to="/" className="navlink"> <button> Farming </button> </NavLink>
                        </nav>
                        <div className="mblheader">
                            <MblHeader/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

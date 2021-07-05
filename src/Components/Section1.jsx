import React from 'react'

import { makeStyles } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';


import Header from './Header'

import BackImg from "../imgs/background.svg"
import TitleImg from '../imgs/title.svg'
import TitleImgMbl from '../imgs/titlembl.png'
import './CSS/Section1.scss'


const Styles = makeStyles({
    btn: {
        backgroundColor: "#323641",
        color: "#8c9eff",
        padding: ".5rem",
        fontSize: "1.5rem",
        borderRadius: "5rem",
        marginRight: "1rem"

    }
})

const Section1 = () => {
    const classes = Styles()
    return (
        <>
            <div className="section1_container" style={{ backgroundImage: `url(${BackImg})` }} >
                <Header />
                <div className="section1_box">
                    <img src={TitleImgMbl} alt="ERROR" className="titleimgmbl" />
                    <div className="data">
                        <p className="title">
                            Bscience
                        </p>
                        <p className="discription1">The science of Decentralized Finance</p>
                        <p className="discription2">now on BSC!</p>
                        <div className="btns">
                            <button>YFScience</button>
                            <button>Farming Labs</button>
                            <button>Buy</button>
                            <button>Litepaper</button>
                        </div>
                        <div className="socials">
                            <a href="/"> <GitHubIcon className={classes.btn} /> </a>
                            <a href="/"> <TelegramIcon className={classes.btn} /> </a>
                            <a href="/"> <MailIcon className={classes.btn} /> </a>
                            <a href="/"> <TwitterIcon className={classes.btn} /> </a>
                        </div>
                    </div>
                    <div className="img">
                        <img src={TitleImg} alt="ERROR" />
                    </div>

                </div>
                <div className="line">
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Section1

import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core'

import './CSS/Footer.scss'

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

const Section7 = () => {
    const classes = Styles();
    return (
        <>
            <div className="footer_container">
                <div className="data">
                    <div className="icons">
                        <GitHubIcon className={classes.btn}/>
                        <TelegramIcon className={classes.btn}/>
                        <MailIcon className={classes.btn}/>
                        <TwitterIcon className={classes.btn}/>
                    </div>
                    <hr />
                    <p> © Copyright Bscience &nbsp; &nbsp; | &nbsp; &nbsp; Powered By <span> <a style={{textDecoration:"none" , color:"#f6d869" , cursor:"pointer"}} href="/"> SoftThrive </a> </span></p>
                </div>
            </div>
        </>
    )
}

export default Section7

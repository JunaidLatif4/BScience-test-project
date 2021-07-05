import React from 'react'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';



import './CSS/MobileHeader.scss'

const useStyles = makeStyles({
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
    menu:{
        color:"#f6d869",
        fontSize:"2.5rem"

    },

});

const MobileHeader = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({

        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button >
                    <ListItemText primary="KEY FEATURES" />
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="TOKENOMICS" />
                </ListItem>
                <Divider/>

                <ListItem button>
                    <ListItemText primary="ROADMAP" />
                </ListItem>
                <Divider/>

                <ListItem button>
                    <ListItemText primary="FARMING" />
                </ListItem>
                <Divider/>

            </List>
        </div>
    );

    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer("right", true)}> <MenuIcon className={classes.menu}/> </Button>
                <SwipeableDrawer
                    anchor="right"
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                    onOpen={toggleDrawer("right", true)}
                >
                    {list("right")}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );

}

export default MobileHeader

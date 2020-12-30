import { AppBar } from '@material-ui/core'
import React from 'react'
import {Toolbar,IconButton,Badge,Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';


import logo from '../../assets/commerce.jpg'
import useStyle from './styles';


const Navbar = ({totalItems}) => {
    const classes = useStyle();
    return (
        <>
           <AppBar position="fixed" className={classes.appBar} color="inherit">

              <Toolbar> 

                <Typography>
                    <img src={logo} alt="commerce.js" height="25px" className={classes.images} />
                    commerce.js
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                        <IconButton aria-label ="show cart items" color="inherit">
                            <Badge badgeContent ={totalItems} color="secondary">
                            <ShoppingCart/>
                            </Badge>

                        </IconButton>

                </div>
      </Toolbar>

               </AppBar> 
        </> 
    )
}

export default Navbar

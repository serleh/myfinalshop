import React from 'react';
import {ShoppingCart} from '@material-ui/icons';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom'


const Navbar = ({totalCarts}) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h5' component={Link} to='/' className={classes.title} color='inherit'>
                       
                        SALSHOP
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname==='/' && ( 
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart'  aria-label='Show cart items' color="inherit">
                            <Badge badgeContent={totalCarts} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                    </div>)}
                </Toolbar>

            </AppBar>
            
        </div>
    )
}

export default Navbar



import React from 'react';
import {ShoppingCart} from '@material-ui/icons';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import useStyles from './styles';


const Navbar = ({totalCarts}) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h5' className={classes.title} color='inherit'>
                       
                        SALSHOP
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart items' color="inherit">
                            <Badge badgeContent={totalCarts} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                    </div>
                </Toolbar>

            </AppBar>
            
        </div>
    )
}

export default Navbar



import React from 'react';
import {Container, Button, Grid, Typography} from '@material-ui/core';

import useStyles from './styles';

const Cart = ({cart}) => {
    const classes = useStyles();

    const isEmpty= !cart.line_items.length;

    const EmptyCart =()=>(
        <Typography variant='subtitle1'>Your Cart is empty, please add Something to it.</Typography>

    );

    const FilledCart = ()=>(
        <>
            <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
            <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
          <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
        </>
    )
    
    return (
        <Container>
            <div className={classes.toolbar } />
            <Typography className={classes.title} variant='h2'>Checkout</Typography>
            {isEmpty ?<EmptyCart />: <FilledCart />}
        </Container>
    )
}

export default Cart

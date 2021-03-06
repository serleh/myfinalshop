import React from 'react';
import {Container, Button, Grid, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom'
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({cart,updateCartQty,removeFromCart,emptyCart }) => {
    const classes = useStyles();


    const EmptyCart =()=>(
        <Typography variant='subtitle1'>Your Cart is empty, please add Something to it.

        <Link className={classes.link} to='/'>Add Something to your cart</Link>
        </Typography>

    );

    const FilledCart = ()=>(
        <>
            <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
               <CartItem item={item} onUpdateCartQty={updateCartQty}  onRemoveFromCart={removeFromCart} />
          </Grid>
        ))}
      </Grid>
            <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button onClick={emptyCart} className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
        </>
    )
    
      if(!cart.line_items) return 'loading'
    return (
        <Container>
            <div className={classes.toolbar } />
            <Typography className={classes.title} variant='h2' gutterBottom>Your Cart Checkout</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart

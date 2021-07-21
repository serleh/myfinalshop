import React from 'react';
import {AddShoppingCart} from '@material-ui/icons';
import {Card, CardMedia,CardContent,IconButton,CardActions,Typography} from '@material-ui/core';

import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles(); 
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image = '' title={product.name} />
            <CardContent>
                <div  className={classes.cardContent}>
                    <Typography variant = 'h5' gutterBottom  >
                        {product.name}
                    </Typography>
                    <Typography variant = 'h5'  >
                        {product.price}
                    </Typography>
                </div>
            </CardContent>
            <CardActions diasbleSpacing className={classes.CardActions}>
                <IconButton aria-label='Add to cart'>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
             
        </Card>
    )
}

export default Product

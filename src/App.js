import React, {useState, useEffect} from 'react';
// import Products from './components/Products/Products';
import {commerce} from './library/Shop'

import {Products, Navbar} from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})

    const fetchProducts = async () =>{
        const {data} = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async ()=>{
         setCart(await commerce.cart.retrieve());

       
    }

    useEffect(() =>{
        fetchProducts();
        fetchCart();

    }, []);

    console.log(cart);
    return (
        <div>
            <Navbar/>
            <Products products={products} /> 
        </div>
    )
}

export default App;

import React from 'react'
import { useContext } from 'react';
import { CartContest } from '../contest/cart';

const Item = (props) => {

    const myCart = useContext(CartContest);
    console.log(myCart)

    return (
        <div className='item-card'>
            <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
            <button onClick={() =>
                myCart.setItems([...myCart.items, { name: props.name, price: props.price },])
            }>Add To Cart</button>
        </div>
    );
};

export default Item;
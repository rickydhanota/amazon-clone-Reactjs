import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const[{ basket, user }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
 
    return (
        <div className = "checkoutProduct">
            <img className = "checkoutProduct__image" src = {image} />

            <div className = "checkoutProduct__info">
                <p className = "checkoutProduct__title" >{title}</p>
                <p className = "checkoutProduct__prince"> 
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className = "CheckoutProduct__rating">
                    {Array(rating).fill().map((_,i) => ( <p> 🌟 </p> ))}
                </div>
                <button onClick = {removeFromBasket}>Remove from Basket</button>
            </div>

        </div>

    )
}
export default CheckoutProduct

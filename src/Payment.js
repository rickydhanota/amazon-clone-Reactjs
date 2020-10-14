import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Card } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements;
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios
        }
        getClientSecret();
    }, [basket])

    const[error, setError] = useState(null)
    const[disabled, setDisabled] = useState(true)

    const handleChange = event => {
        //Listen for card changes in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    const handleSubmit = async (event) => {
        //stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe
    }

    return (
        <div className = "payment">
            <div className="payment__container">

                <h1>
                    Checkout (<Link to = "/checkout">{basket?.length} Items</Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        {user?.email}
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>



                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className = "payment__items">
                        {basket.map(item =>(
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />  
                        ))}
                    </div>
                </div>



                <div className="payment__section">
                    <div className = "payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className = "payment__details">
                        <form onSubmit = {handleSubmit}>
                            <CardElement onChange = {handleChange}/>
                            <div className = "payment__priceContainer">
                                <CurrencyFormat 
                                renderText = {(value) => (
                                    <>
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale = {2}
                                value = {getBasketTotal(basket)}
                                displayType ={"text"}
                                thousandSeparator = {true}
                                prefix = {"$"}
                                /> 
                                <button disabled = {processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                                {/* Error */}
                                {error && <div>{error}</div>}

                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment

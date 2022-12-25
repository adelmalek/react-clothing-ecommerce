import './checkout.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='chechout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map(cartItem => {
                const { id, name, quantity} = cartItem;
                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <br />
                        <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
                        <br />
                        <span onClick={() => addItemToCart(cartItem)}>increment</span>
                    </div>
                )
            })}

            <span className='total'>Total: 0</span>
        </div>
        
        
    )
};

export default Checkout;
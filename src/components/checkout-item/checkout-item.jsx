import './checkout-item.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const CheckoutItem = ( {cartItem} ) => {
    const { name, imageUrl, quantity, price} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;
import './checkout-item.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const CheckoutItem = ( {cartItem} ) => {
    const { name, imageUrl, quantity, price} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const handleClear = () => clearItemFromCart(cartItem);
    const handleAdd = () => addItemToCart(cartItem);
    const handleRemove = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={handleRemove}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={handleAdd}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={handleClear}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;
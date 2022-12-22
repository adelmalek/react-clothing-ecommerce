import './checkout.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            {cartItems.map(cartItem => {
                const { id, name, quantity} = cartItem;
                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                    </div>
                )
            })}
        </div>
    )
};

export default Checkout;
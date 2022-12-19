import './cart-icon.scss';

import { ReactComponent as ShoppingCart } from '../../assets/shoppingCart.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsOpen}>
            <ShoppingCart className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
};

export default CartIcon;
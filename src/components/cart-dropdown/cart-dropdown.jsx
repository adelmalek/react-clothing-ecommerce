import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

import { Navigate, useNavigate } from 'react-router-dom';

import './cart-dropdown.scss';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button buttonType='default' onClick={goToCheckOutHandler}>Go to checkout</Button>
        </div>
    )
};

export default CartDropdown;
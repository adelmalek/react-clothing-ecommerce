import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

import { Navigate, useNavigate } from 'react-router-dom';

import { CartDropDownContainer, CartItems, Btn, EmptyMessage } from './cart-dropdown.styles';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropDownContainer>
            <CartItems>
                { cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
            }
            </CartItems>
            <Btn as={Button} buttonType='base' onClick={goToCheckOutHandler}>Go to checkout</Btn>
        </CartDropDownContainer>
    )
};

export default CartDropdown;
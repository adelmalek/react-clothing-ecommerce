import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartDropDownContainer, CartItems, Btn, EmptyMessage } from './cart-dropdown.styles';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
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
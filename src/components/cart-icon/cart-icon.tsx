import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

import { ReactComponent as ShoppingCart } from '../../assets/shoppingCart.svg';

import { useDispatch, useSelector } from 'react-redux';

import { setIsCartOpen, } from '../../store/cart/cart.actions';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
   
    const toggleIsOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsOpen}>
            <ShoppingIcon as={ShoppingCart} />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;
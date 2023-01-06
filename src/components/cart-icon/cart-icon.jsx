import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

import { ReactComponent as ShoppingCart } from '../../assets/shoppingCart.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsOpen = () => setIsCartOpen(!isCartOpen);

    const { cartCount } = useContext(CartContext);

    return (
        <CartIconContainer onClick={toggleIsOpen}>
            <ShoppingIcon as={ShoppingCart} />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;
import { CartItemContainer, CartItemImage, ItemDetails, Name } from './cart-item.styles';

import { FC, memo } from 'react';

import { CartItem as TCartItem} from '../../store/cart/cart.types';

type CartItemProps = {
    cartItem: TCartItem;
};

const CartItem: FC<CartItemProps>  = memo(({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
});

export default CartItem;
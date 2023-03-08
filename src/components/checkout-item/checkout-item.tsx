import { 
    CheckOutItemContainer, 
    ImageContainer, 
    Image, 
    Name, 
    Quantity, 
    Price, 
    Arrow, 
    Value, 
    RemoveButton } from './checkout-item.styles';

import { useSelector, useDispatch } from 'react-redux';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

import { FC, memo } from 'react';

import { CartItem } from '../../store/cart/cart.types';

type CheckOutItemProps = {
    cartItem: CartItem;
};

const CheckoutItem: FC<CheckOutItemProps> = memo(( {cartItem} ) => {
    const { name, imageUrl, quantity, price} = cartItem;

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const handleClear = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const handleAdd = () => dispatch(addItemToCart(cartItems, cartItem));
    const handleRemove = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={handleRemove}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={handleAdd}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={handleClear}>&#10005;</RemoveButton>
        </CheckOutItemContainer>
    )
});

export default CheckoutItem;
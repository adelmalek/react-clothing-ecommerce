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

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const CheckoutItem = ( {cartItem} ) => {
    const { name, imageUrl, quantity, price} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const handleClear = () => clearItemFromCart(cartItem);
    const handleAdd = () => addItemToCart(cartItem);
    const handleRemove = () => removeItemFromCart(cartItem);

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
};

export default CheckoutItem;
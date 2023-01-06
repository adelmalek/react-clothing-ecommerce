import { CheckOutContainer, Header, Block, Total } from './checkout.styles';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

import CheckoutItem from '../../components/checkout-item/checkout-item';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckOutContainer>
            <Header>
                <Block>
                    <span>Product</span>
                </Block>
                <Block>
                    <span>Description</span>
                </Block>
                <Block>
                    <span>Quantity</span>
                </Block>
                <Block>
                    <span>Price</span>
                </Block>
                <Block>
                    <span>Remove</span>
                </Block>
            </Header>

            
            {cartItems.map(cartItem => 
                <CheckoutItem 
                    key={cartItem.id} 
                    cartItem={cartItem}
                />)}

            <Total>Total: ${cartTotal}</Total>
        </CheckOutContainer>
        
        
    )
};

export default Checkout;
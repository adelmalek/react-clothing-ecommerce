import { CheckOutContainer, Header, Block, Total } from './checkout.styles';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import PaymentForm from '../../components/payment-form/payment-form';

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';


const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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

            <PaymentForm />
        </CheckOutContainer>
        
        
    )
};

export default Checkout;
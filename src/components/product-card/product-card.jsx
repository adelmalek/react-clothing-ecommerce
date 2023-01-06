import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

import { 
    ProductCardContainer, 
    Image, 
    Btn, 
    Footer, 
    Name, 
    Price } from './product-card.styles';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Btn as={Button} buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Btn>
        </ProductCardContainer>
    )
};

export default ProductCard;
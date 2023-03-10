import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

import { 
    ProductCardContainer, 
    Image, 
    Btn, 
    Footer, 
    Name, 
    Price } from './product-card.styles';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button';

import { FC } from 'react';

import { CategoryItem } from '../../store/categories/category.types';

type ProductCardProps = {
    product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { name, imageUrl, price } = product;
    
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
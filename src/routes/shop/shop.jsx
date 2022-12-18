import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products';

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div>
            {products.map( ({id, name, imageUrl, price}) => (
                <div key={id}>
                    <h2>{name}</h2>
                    <img src={imageUrl} alt={name} />
                    <p>{price}</p>
                </div>
            ))}
        </div>
    )
};

export default Shop;


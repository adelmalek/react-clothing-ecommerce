import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase';

export const ProductsContext = createContext({
    products: null,
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value = {products};

    useEffect( () => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        };

        return getCategoriesMap();
    }, []);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}
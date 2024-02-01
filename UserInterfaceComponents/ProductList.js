import React, { useState, useEffect } from 'react';
import MarketplaceContract from '../contracts/MarketplaceContract';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await MarketplaceContract.methods.getProducts().call();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

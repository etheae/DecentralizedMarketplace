import React, { useState, useEffect } from 'react';
import MarketplaceContract from '../contracts/MarketplaceContract';

const ProductDetail = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const loadProductDetail = async () => {
            const data = await MarketplaceContract.methods.getProductDetail(productId).call();
            setProduct(data);
        };
        loadProductDetail();
    }, [productId]);

    return product ? (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            {/* Add buttons for purchase or bid here */}
        </div>
    ) : <p>Loading...</p>;
};

export default ProductDetail;

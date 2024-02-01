import React, { useState } from 'react';
import MarketplaceContract from '../contracts/MarketplaceContract';

const AddProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const priceInWei = window.web3.utils.toWei(price, 'ether');
        await MarketplaceContract.methods.addProduct(name, description, priceInWei).send();
        // Reset form after submission
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description" required />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price in ETH" required />
            <button type="submit">List Product</button>
        </form>
    );
};

export default AddProductForm;

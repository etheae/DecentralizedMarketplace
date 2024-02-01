import React, { useState, useEffect } from 'react';
import MarketplaceContract from '../contracts/MarketplaceContract';

const TransactionHistory = ({ userAddress }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const loadTransactions = async () => {
            // Placeholder function for fetching transaction history
            // This will depend on the implementation of your smart contract
            const history = await MarketplaceContract.methods.getTransactionHistory(userAddress).call();
            setTransactions(history);
        };
        loadTransactions();
    }, [userAddress]);

    return (
        <div>
            <h3>Transaction History</h3>
            {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                    <div key={index}>
                        <p>Product: {transaction.productName}</p>
                        <p>Price: {transaction.price}</p>
                        <p>Date: {new Date(transaction.timestamp * 1000).toLocaleString()}</p>
                    </div>
                ))
            ) : (
                <p>No transactions found.</p>
            )}
        </div>
    );
};

export default TransactionHistory;

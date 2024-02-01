import React, { useState, useEffect } from 'react';
import WalletConnector from './WalletConnector';

const UserAccount = () => {
    const [balance, setBalance] = useState('0');
    const walletConnector = new WalletConnector();

    useEffect(() => {
        const loadBalance = async () => {
            const account = await walletConnector.getAccount();
            const balance = await walletConnector.web3.eth.getBalance(account);
            setBalance(walletConnector.web3.utils.fromWei(balance, 'ether'));
        };
        loadBalance();
    }, []);

    return (
        <div>
            <h2>Your Balance: {balance} ETH</h2>
            {/* Add more account-related information and actions here */}
        </div>
    );
};

export default UserAccount;

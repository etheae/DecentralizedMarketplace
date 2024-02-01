import Web3 from 'web3';

class WalletConnector {
    constructor() {
        if (window.ethereum) {
            this.web3 = new Web3(window.ethereum);
            this.initialize();
        } else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    }

    async initialize() {
        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed, can start making transactions
            this.accounts = await this.web3.eth.getAccounts();
            console.log('Connected to wallet:', this.accounts[0]);
        } catch (error) {
            console.error('User denied wallet access', error);
        }
    }

    async getAccount() {
        if (!this.accounts) {
            await this.initialize();
        }
        return this.accounts[0];
    }

    // Additional methods to interact with the blockchain can be added here
}

export default WalletConnector;

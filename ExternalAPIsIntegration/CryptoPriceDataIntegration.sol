// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract CryptoPriceDataIntegration {
    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Ethereum Mainnet
     * Aggregator: ETH/USD
     * Address: 0x... (chainlink ETH/USD Price Feed address on Ethereum mainnet)
     */
    constructor() {
        priceFeed = AggregatorV3Interface(0x...);
    }

    /**
     * Returns the latest price of Ethereum in USD
     */
    function getLatestEthPrice() public view returns (int) {
        (
            /* uint80 roundID */,
            int price,
            /* uint startedAt */,
            /* uint timeStamp */,
            /* uint80 answeredInRound */
        ) = priceFeed.latestRoundData();
        return price;
    }
}

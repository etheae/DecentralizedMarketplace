// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MarketplaceContract.sol";

contract MarketplaceAnalytics {
    MarketplaceContract marketplace;

    constructor(address _marketplaceAddress) {
        marketplace = MarketplaceContract(_marketplaceAddress);
    }

    function getAveragePrice() public view returns (uint256) {
        uint256 total = 0;
        uint256 itemCount = marketplace.getNextItemId();

        for (uint256 i = 0; i < itemCount; i++) {
            (, , , uint price) = marketplace.getItem(i);
            total += price;
        }

        return itemCount == 0 ? 0 : total / itemCount;
    }

    // Additional analytics functions can be added here
}

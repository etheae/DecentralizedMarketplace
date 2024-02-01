// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MarketplaceInterface.sol";

contract MarketplaceAdmin is IMarketplaceManagement {
    address public owner;
    uint public marketplaceFee;

    constructor() {
        owner = msg.sender;
        marketplaceFee = 1; // Default fee as a percentage
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function withdrawFunds() external override onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    function setMarketplaceFee(uint newFee) external override onlyOwner {
        marketplaceFee = newFee;
    }

    function getMarketplaceBalance() external view override returns (uint) {
        return address(this).balance;
    }
}

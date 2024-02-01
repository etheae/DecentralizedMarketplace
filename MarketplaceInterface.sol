// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IItemListing {
    // Interface for listing items in the marketplace
    function listItem(string memory name, uint price) external;

    // Interface for buying items from the marketplace
    function buyItem(uint itemId) external payable;

    // Interface to retrieve item details by its ID
    function getItem(uint itemId) external view returns (string memory name, uint price, address seller);
}

interface IMarketplaceManagement {
    // Interface for withdrawing funds from the marketplace by the owner
    function withdrawFunds() external;

    // Interface for changing fees or other marketplace parameters
    function setMarketplaceFee(uint newFee) external;

    // Interface to check the balance of the marketplace
    function getMarketplaceBalance() external view returns (uint);
}

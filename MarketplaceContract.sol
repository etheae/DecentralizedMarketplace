// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedMarketplace {
    struct Item {
        uint id;
        address seller;
        string name;
        uint price;
    }

    Item[] public items;
    uint public nextItemId;

    mapping(uint => address) public itemToBuyer;

    function listItem(string memory name, uint price) public {
        require(price > 0, "Price must be greater than 0");
        items.push(Item(nextItemId, msg.sender, name, price));
        nextItemId++;
    }

    function buyItem(uint itemId) public payable {
        require(itemId < nextItemId, "Item does not exist");
        Item storage item = items[itemId];
        require(msg.value == item.price, "Incorrect price");
        require(itemToBuyer[itemId] == address(0), "Item already sold");

        itemToBuyer[itemId] = msg.sender;
        payable(item.seller).transfer(msg.value);
    }

    function getItem(uint itemId) public view returns (Item memory) {
        require(itemId < nextItemId, "Item does not exist");
        return items[itemId];
    }
}

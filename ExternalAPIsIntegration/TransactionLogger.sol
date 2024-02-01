// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionLogger {
    event TransactionRecorded(address indexed user, string action, uint256 amount, string details);

    function logTransaction(string memory action, uint256 amount, string memory details) external {
        emit TransactionRecorded(msg.sender, action, amount, details);
    }
}

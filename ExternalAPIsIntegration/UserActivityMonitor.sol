// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserActivityMonitor {
    event UserActivity(address indexed user, string activity, uint timestamp);

    function recordActivity(string memory activity) external {
        emit UserActivity(msg.sender, activity, block.timestamp);
    }

    // Additional functions to analyze user activity can be added here
}

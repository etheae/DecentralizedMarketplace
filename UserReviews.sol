// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserReviews {
    struct Review {
        uint256 itemId;
        address reviewer;
        uint8 rating; // Rating out of 5
        string comment;
    }

    Review[] public reviews;

    function leaveReview(uint256 _itemId, uint8 _rating, string memory _comment) public {
        require(_rating > 0 && _rating <= 5, "Rating must be between 1 and 5");
        reviews.push(Review(_itemId, msg.sender, _rating, _comment));
    }

    function getReviewsForItem(uint256 _itemId) public view returns (Review[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < reviews.length; i++) {
            if (reviews[i].itemId == _itemId) {
                count++;
            }
        }

        Review[] memory itemReviews = new Review[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < reviews.length; i++) {
            if (reviews[i].itemId == _itemId) {
                itemReviews[index] = reviews[i];
                index++;
            }
        }
        
        return itemReviews;
    }
}

const MarketplaceContract = artifacts.require("MarketplaceContract");

contract('MarketplaceContract Tests', async (accounts) => {
  it('should list a product correctly', async () => {
    const marketplace = await MarketplaceContract.deployed();
    
    // Adjust these values and function calls as per your contract
    await marketplace.listProduct("Product 1", web3.utils.toWei("1", "ether"), { from: accounts[0] });
    const product = await marketplace.products(0);

    assert.equal(product.name, "Product 1", "The name of the last added product does not match.");
  });

  // Add more tests as needed
});

const MarketplaceContractV1 = artifacts.require("MarketplaceContractV1");
const MarketplaceContractV2 = artifacts.require("MarketplaceContractV2");

module.exports = async function (deployer, network, accounts) {
  // Deploy the new version of the contract
  await deployer.deploy(MarketplaceContractV2);
  const newMarketplace = await MarketplaceContractV2.deployed();

  // Optionally, copy over data from the old contract or initialize new settings
  // Example: const oldMarketplace = await MarketplaceContractV1.deployed();

  console.log(`Marketplace upgraded to V2 at address: ${newMarketplace.address}`);
};

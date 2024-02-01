const Migrations = artifacts.require("Migrations");
const MarketplaceContract = artifacts.require("MarketplaceContract");

module.exports = async function(deployer, network, accounts) {
    // Deploy the Migrations contract as a way to keep track of changes.
    await deployer.deploy(Migrations);

    // Deploy the main marketplace contract.
    await deployer.deploy(MarketplaceContract);

    console.log(`MarketplaceContract deployed to address: ${MarketplaceContract.address}`);
};

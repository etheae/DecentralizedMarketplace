const switchNetwork = async (networkName) => {
  console.log(`Attempting to switch to ${networkName}...`);

  // Example using Truffle's exec command - adapt based on your deployment setup
  try {
    await exec(`truffle migrate --network ${networkName}`);
    console.log(`Successfully switched to ${networkName}.`);
  } catch (error) {
    console.error(`Failed to switch to ${networkName}: ${error.message}`);
  }
};

// Example usage
switchNetwork('rinkeby');

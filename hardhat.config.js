require('@nomicfoundation/hardhat-toolbox');
module.exports = {
  solidity: '0.8.9',
  // defaultNetwork: "rinkeby",
  paths: {
    artifacts: './src/context/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
};

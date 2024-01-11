const { ethers } = require('ethers');
const hre = require('hardhat');

async function main() {
  // DEPLOY TOKEN CONTRACT

  const TheBlockchainCoders = await hre.ethers.getContractFactory('Token');

  const theBlockchainCoders = await TheBlockchainCoders.deploy(500000000);

  await theBlockchainCoders.deployed();
  console.log(`TheBlockchainCoders: ${theBlockchainCoders.address}`);

  // TOKEN SALE CONTRACT

  const TokenSale = await hre.ethers.getContractFactory('TokenSell');
  const tokenSale = await TokenSale.deploy(theBlockchainCoders.address, 1);
  await tokenSale.deployed();
  console.log(`TokenSale: ${tokenSale.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

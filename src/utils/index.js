import { ethers } from 'ethers';
import Web3Model from 'web3modal';

import {
  TOKEN_ADDRESS,
  TOKEN_ABI,
  TOKEN_SALE_ABI,
  TOKEN_SALE_ADDRESS,
} from '../context/constante';

export const checkIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log('Install MetaMask');
    const accounts = await window.ethereum.request({
      method: 'eth_accounts',
    });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log('Install MetaMask');
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    const firstAccount = accounts[0];
    window.location.reload();
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

//TOKEN CONTRACT
const fetchTokenContract = (signerOrProvider) =>
  new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signerOrProvider);

export const connectingTOKENCONTRACT = async () => {
  try {
    const web3modal = new Web3Model();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();
    const contract = fetchTokenContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// GET BALANCE
export const getBalance = async () => {
  try {
    const web3modal = new Web3Model();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();

    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};

//TOKEN SALE CONTRACT
const fetchToken_SALE_Contract = (signerOrProvider) =>
  new ethers.Contract(TOKEN_SALE_ADDRESS, TOKEN_SALE_ABI, signerOrProvider);

export const connectingTOKEN_SALE_CONTRACT = async () => {
  try {
    const web3modal = new Web3Model();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = await provider.getSigner();
    const contract = fetchToken_SALE_Contract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

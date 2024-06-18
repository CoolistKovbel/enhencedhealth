import { ethers } from "ethers";

import NFTContractAbi from "../lib/nftContract.json";

// NFT Contract /testnet
export const ContractNFTCollection =
  "0xE5A004AE56444feF359C55957030A7724EF0de2E";

export const getEthereumObject = () => {
  return typeof window !== "undefined" ? window.ethereum : null;
};

export const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      alert("connect your metamask account....");

      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const isClientSide = () => {
  return (
    typeof window !== "undefined" && typeof window.ethereum !== "undefined"
  );
};

export const getTokenSupply = async () => {
  try {
    if (!isClientSide()) {
      throw new Error("This function can only be called on the client side");
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      ContractNFTCollection,
      NFTContractAbi,
      signer
    );

    const supply = await contractInstance.giveMeTotalSupply();

    return supply;
  } catch (error) {
    console.error("Error fetching token supply:", error);
    throw error;
  }
};

// Example function to mint an NFT
export const mintNFT = async (_amount: any) => {
  try {
    console.log("Minting NFT", _amount);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      ContractNFTCollection,
      NFTContractAbi,
      signer
    );

    // Read the current price from the contract
    const priceInWei = await contractInstance.readPrice();
    const totalCost = priceInWei.mul(_amount);

    console.log("Total cost in Wei:", totalCost.toString());

    // Mint the NFT(s)

    console.log(await contractInstance);

    const tx = await contractInstance.mint(_amount, {
      value: totalCost,
      gasLimit: 600000,
    });

    await tx.wait();

    console.log("Transaction:", tx);
  } catch (error) {
    console.error("Error minting NFT:", error);
  }
};

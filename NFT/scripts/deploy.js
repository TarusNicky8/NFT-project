const { ethers } = require("hardhat")

async function main() {
    const Crypto = await ethers.getContractFactory("Crypto")
    const crypto = await Crypto.deploy("Crypto", "CBEET")
    await Crypto.deployed()
    console.log('Contract successfully deployed to ${Crypto.address}')

    const newItemid = await Crypto.mint("https://ipfs.io/ipfs/QmeguJjkWTJ3Nthwma7uBrFSsH71Ke2PJ8g4pGy9yHYDLc")
    console.log('NFT minted successfully')
   
    }



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

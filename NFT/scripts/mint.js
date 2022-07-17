const { ethers } = require("hardhat")
const cryptoJSON = require("../artifacts/contracts/Crypto.sol/crypto.json")

async function main() {
    const abi = cryptoJSON.abi
    const provider = new ethers.provider.InfuraProvider("rinkeby", e157a632b678455d80c74485c0bb0f2b)//RINKEBY PROJECT ID)
    const wallet = new.ethers.wallet(process.env.PRIVATE_KEY, provider)
    const signer = wallet.connect(provider)
    const crypto = new ethers.Contract('', abi, signer)

   
}



main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

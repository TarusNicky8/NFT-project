require("@nomiclabs/hardhat-waffle");
require(".dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.14",
    network: {
        rinkeby: {
            url: 'https://rinkeby.infura.io/v3/e157a632b678455d80c74485c0bb0f2b', //process.env.RINKEYBY URL
            account: '6b49164f081831213c69431b322cd8ae99e1a40087a705d5607f55063cf5284a' //[process.env.PRIVATE_KEY]
        },
        rinkeby: {
            url: 'https://rinkeby.infura.io/v3/e157a632b678455d80c74485c0bb0f2b', //process.env.RINKEYBY URL
            account: '6b49164f081831213c69431b322cd8ae99e1a40087a705d5607f55063cf5284a' //[process.env.PRIVATE_KEY]
        }
     }
};

require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "xx02b0fa13aa29xxe7bv10b0766927xx2982xx6978a5gh50f470adcb9e66aaxx";
// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};

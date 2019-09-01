const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  compilers: {
    solc: {
      version: "0.5.1"
    }
  },
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "localhost",
      // port: 8545
      port: 20636,
      gas: 8000000,
      // gasPrice: web3.utils.toWei("5", "gwei"),
      network_id: "*" // Match any network id
    },
    elaeth: {
      host: "https://rpc.elaeth.io",
      port: 443,
      gas: 8000000,
      network_id: "3",
    }
  }
};

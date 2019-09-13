const path = require("path");
const Web3 = require("web3");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  compilers: {
    solc: {
      version: "0.5.1"
    }
  },
  networks: {
    develop: {
      host: "localhost",
      port: 20636,
      gas: 8000000,
      network_id: "*",
      from: 'YOUR_PUBLIC_KEY',
    },
    elaeth: {
      gas: 8000000,
      network_id: "3",
      from: 'YOUR_PUBLIC_KEY',
      provider: new Web3.providers.HttpProvider('https://rpc.elaeth.io:443')
    }
  }
};

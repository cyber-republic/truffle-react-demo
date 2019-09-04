const path = require("path");

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
      network_id: "*"
    },
    elaeth: {
      host: "https://rpc.elaeth.io",
      port: 443,
      gas: 8000000,
      network_id: "3",
    }
  }
};

require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');

const providerWithMnemonic = (mnemonic, rpcEndpoint) =>
  new HDWalletProvider(mnemonic, rpcEndpoint);

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    },
    testrpc: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    },
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
      docker: true,
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
};


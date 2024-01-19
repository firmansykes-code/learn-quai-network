/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomicfoundation/hardhat-toolbox');

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  defaultNetwork: 'colosseum',
  networks: {
    // testnet
    colosseum: {
      url: `${process.env.RPCURL}`,
      accounts: [process.env.PRIVKEY],
      chainId: 9000, // colosseum chainId
    },
    // devnet
    garden: {
      url: `${process.env.RPCURL}`,
      accounts: [process.env.PRIVKEY],
      chainId: 12000, // garden chainId
    },

    // local
    local: {
      url: `${process.env.RPCURL}`,
      accounts: [process.env.PRIVKEY],
      chainId: 1337, // local chainId
    },
  },

  // include compiler version defined in your smart contract
  solidity: {
    compilers: [
      {
        version: '0.8.9',
      },
    ],
  },

  paths: {
    sources: './contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 20000,
  },
};
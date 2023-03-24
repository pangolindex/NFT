/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { FUJI_API_URL, AVAX_API_URL, API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "polygon",
   networks: {
      hardhat: {},
      polygon: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      fuji: {
        url: FUJI_API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     },
     avalanche: {
      url: AVAX_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
   },
   },
}

const Web3 = require('web3');
require("dotenv").config();

const provider = process.env.FUJI_API_URL;
const web3 = new Web3(provider);
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const abi = require("../artifacts/contracts/NFT.sol/MyNFT.json")
const contractAddress = process.env.NFT_CONTRACT
const contract = new web3.eth.Contract(abi.abi, contractAddress)
async function mintMultiple(tokenURIs) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: contract.methods.mintMultiple(PUBLIC_KEY, tokenURIs).encodeABI(),
  }

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log("Promise failed:", err)
    })
}

const ipfsMetadata = ["ipfs://QmfGB2oFKmaEKTK2CygVoazHBRyqpyFeiuiRovTimz1Si6","ipfs://QmfGB2oFKmaEKTK2CygVoazHBRyqpyFeiuiRovTimz1Si6"]
mintMultiple(ipfsMetadata)

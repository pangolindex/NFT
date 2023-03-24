# Overview
This NFT series will be used to give access to people to gated communities through Collab.land https://www.collab.land/ 

We will have the following traits
```json
{
  "attributes": [
    {
      "trait_type": "Access Permissions",
      "value": "all"
    }
  ],
  "description": "Pangolin's insider community NFT Series",
  "image": "QmcNPoB8sZNx9isCksK5Xkmv5NN54doVTKY35SFroY1F5s",
  "name": "Pangolin Degenista"
}
```
Access Permissions can have one of three values:
* telegram
* discord
* all 

# Deploying the NFT's
To deploy the NFT use
`npx hardhat --network avalanche run scripts/deploy.js`

Then update the .env file with the contract

Then to mint a new NFT, follow these steps:
* Configure the Metadata files in the metadata folder
* Upload the `nft-metadata.json` to Pinata
* Configure the mint-nft.js file with IPFS hash of the uploaded metadata
* Adjust the script to use the correct URL environment variable
* Run `node scripts/mint-nft.js`

For this initial mint, Hari Seldon will mint the following:
* 5 with Access Permissions = all
* 5 with Access Permissions = discord
* 5 with Access Permissions = telegram

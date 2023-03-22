To deploy the NFT use
`npx hardhat --network fuji run scripts/deploy.js`

Then to mint a new NFT, follow these steps:
* Configure the `nft-metadata.json` file
* Upload the `nft-metadata.json` to Pinata
* Configure the mint-nft.js file with IPFS hash of the uploaded metadata
* Run `node scripts/mint-nft.js`

In terms of the Metadata, I'll be minting them as follows:
* Season 1 - Original Team (Justin, Brandon and Leo)
* Season 2 - Current Core team

# Traits
```
{
    "trait_type": "Contributor Role",
    "value": ["Community Voted Team", "Fulltime Core Team"]
},
{
    "trait_type": "Edition",
    "value": "Genesis"
}
{
    "trait_type": "Access Permissions",
    "value": ["All", "Deal Flow"]
}
{
    "trait_type: "Voting Rights",
    "value": "All Chains"
}
```
# TODO
Need to add a function to mint multiple NFT's at once. Something like this

```
function mintNFTs(uint256 numberOfNfts) public {
        require(totalSupply + numberOfNfts <= MAX_NFTS, "Maximum number of NFTs exceeded");
        for (uint256 i = 0; i < numberOfNfts; i++) {
            uint256 tokenId = totalSupply + 1;
            _safeMint(msg.sender, tokenId);
            totalSupply++;
        }
        emit NftsMinted(msg.sender, numberOfNfts);
    }

    event NftsMinted(address indexed to, uint256 numberOfNfts);
```

We also need to allow permissioned access to update metadata on the NFT's.

We will simply add a public function that calls the internal _setTokenUri function which is waiting for you.
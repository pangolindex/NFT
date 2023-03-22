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

# Notes
We may need to change the smart contracts in future to allow changing Metadata. es. This is not disallowed by the standard and so you are free to do this.

You will simply add a public function that calls the internal _setTokenUri function which is waiting for you.

It will be up to you decide whether to allow anybody to change any URI anytime or if certain restrictions will be implemented.
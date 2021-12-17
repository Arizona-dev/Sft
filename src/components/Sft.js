import React, { useEffect, useState } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { getParsedNftAccountsByOwner, isValidSolanaAddress, createConnectionConfig } from "@nfteyez/sol-rayz";
import axios from "axios";

const NFT = (props) => {
  const [nftData, setNftData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProvider = () => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider.connect();
      }
    }
    window.open("https://phantom.app/", "_blank");
  };

  const getNftTokenData = async () => {
    try {
      let nftData = await getAllNftData();
      nftData = nftData.filter(nft => nft.updateAuthority === process.env.REACT_APP_TREASURY_ADDRESS);
      var data = Object.keys(nftData).map((key) => nftData[key]);
      let arr = [];
      let n = data.length;
      for (let i = 0; i < n; i++) {
        let val = await axios.get(data[i].data.uri);
        arr.push(val);
      }
      return arr;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllNftData = async () => {
    let connectData = true;
    try {
      if (connectData === true) {
        const connect = createConnectionConfig(clusterApiUrl("devnet"));
        const provider = await getProvider();
        let ownerToken = provider.publicKey;
        if (!isValidSolanaAddress(ownerToken)) throw new Error("solana address is not valid");
        const nfts = await getParsedNftAccountsByOwner({
          publicAddress: ownerToken,
          connection: connect,
          serialization: true,
        });
        return nfts;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function data() {
      let res = await getNftTokenData();
      setNftData(res);
      setLoading(true);
    }
    data();
  });

  return (
    <>
      <section className="nft mt-2 my-5 mx-20">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h4 className="title">My SFT's</h4>
            </div>
          </div>
          <div className="flex justify-content-center">
            {loading ? (
              <>
                {nftData &&
                  nftData.length > 0 &&
                  nftData.map((val, ind) => {
                    return (
                      <div className="m-4 flex col-8" key={ind}>
                        <div className="flex text-center">
                          <div className="img mt-4 pt-3">
                            <img src={val.data.image} alt="loading..." width="200" />
                            <p className="mt-2">{val.data.name}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </>
            ) : (
              <>
                <p className="text-center">loading...</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NFT;
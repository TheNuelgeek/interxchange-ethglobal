import Header from "./header";
import NetworkSelector from "./networkSelector";
import nftAsset from "../images/nftAssets.png";
import tokenAsset from "../images/tokenAssets.png";
import { useState } from "react";
import "../styles/market.css";

export default function Market() {
  const [selection, setSelection] = useState(true);
  const NftAsset = nftAsset;
  const TokenAsset = tokenAsset;

  return (
    <>
      <Header />
      <div className="top-section">
        <div className="network-selector">
          <NetworkSelector />
        </div>
        <div className="text-group">
          <p className="text1">Total Market Size</p>
          <p className="text2">$10B</p>
          <p className="text3">Total Available</p>
          <p className="text4">$3.2B</p>
          <p className="text5">Total Borrowed</p>
          <p className="text6">$3B</p>
        </div>
      </div>
      <div className="market-content">
        <button onClick={() => setSelection(true)} className="token-btn">
          Tokens
        </button>
        <button onClick={() => setSelection(false)} className="nft-btn">
          NFTs
        </button>
        <div className="table">
          {selection ? (
            <img src={TokenAsset} alt="" />
          ) : (
            <img src={NftAsset} alt="" />
          )}
        </div>
      </div>
    </>
  );
}

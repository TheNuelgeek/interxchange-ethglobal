import { useState } from "react";
import Dropdown from "./dropdown";
import Card from "./card";
import "../styles/supportedNfts.css";

export default function SupportedNFTs() {
  const [chain, setChain] = useState("blockchain");
  const [filter, setFilter] = useState("experience");

  //for dropdown populate after figma is complete
  const chainOptions = [{ label: "", value: "" }];
  const filterOptions = [{ label: "", value: "" }];

  //for cards populate after figma is complete, for now use whats available
  // const cardItems = [
  //   {
  //     imageSrc: () => require("../images/cryptopunks.png"),
  //     heading: "CrptoPunks",
  //     body: "CryptoPunks launched as a fixed set of 10,000...",
  //     pageUrl: "",
  //   },
  //   {
  //     imageSrc: () => require("../images/toshies.png"),
  //     heading: "TOSHIES",
  //     body: "Step into the pixelated world of Toshi...",
  //     pageUrl: "",
  //   },
  //   {
  //     imageSrc: () => require("../images/sewerPass.png"),
  //     heading: "Sewer Pass",
  //     body: "A Sewer Pass grants access to Yuga Labs' Dookey...",
  //     pageUrl: "",
  //   },
  // ];

  const handleChainChange = (e) => {
    setChain(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="supported-nfts">
      <h2>Supported NFTs</h2>
      {/* <div className="dropdown-selector"> */}
      <div className="dropdown-selector-1">
        <Dropdown
          label="Blockchain"
          options={chainOptions}
          value={chain}
          onChange={handleChainChange}
        />
      </div>
      <div className="dropdown-selector-2">
        <Dropdown
          label="Filter on experience"
          options={filterOptions}
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      {/* {cardItems.map((items) => (
        <Card
          image={items.imageSrc()}
          heading={items.heading}
          body={items.body}
          pageUrl={items.pageUrl}
        />
      ))} */}
      <Card
        image={require("../images/cryptopunks.png")}
        heading={"CrptoPunks"}
        body={"CryptoPunks launched as a fixed set of 10,000..."}
        pageUrl={"/"}
      />
      <Card
        image={require("../images/toshies.png")}
        heading={"TOSHIES"}
        body={"Step into the pixelated world of Toshi..."}
        pageUrl={"/"}
      />
      <Card
        image={require("../images/sewerPass.png")}
        heading={"Sewer Pass"}
        body={"A Sewer Pass grants access to Yuga Labs' Dookey..."}
        pageUrl={"/"}
      />
      <button className="lm-btn">load more</button>
    </div>
  );
}

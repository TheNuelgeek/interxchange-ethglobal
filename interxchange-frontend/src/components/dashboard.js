import Header from "./header";
import Dropdown from "./dropdown";
import currency from "../images/currency.png";
import { useState } from "react";
import "../styles/dashboard.css";
import assetBorrow from "../images/assetBorrow.png";
import assetSupply from "../images/assetSupply.png";

export default function Dashboard() {
  const Currency = currency;
  const [network, setNetwork] = useState("Ethereum");
  const networkOptions = [
    { label: "Ethereum", value: "Ethereum" },
    { label: "Polygon", value: "Polygon" },
  ];

  let supply = false; //get this through an API
  let borrow = false; //this too

  // const tableData1 = [
  //   {
  //     asset: "BAYC",
  //     worth: "64.19 ETH",
  //     apy: "1.18%",
  //     collateral: () => require("../images/true.png"),
  //     button: "Supply",
  //   },
  //   {
  //     asset: "Ponzi",
  //     worth: "0.09 ETH",
  //     apy: "-",
  //     collateral: () => require("../images/false.png"),
  //     button: "Supply",
  //   },
  //   {
  //     asset: "CP",
  //     worth: "64.09 ETH",
  //     apy: "1.18%",
  //     collateral: () => require("../images/true.png"),
  //     button: "Claim",
  //   },
  // ];

  const AssetSupply = assetSupply;
  const AssetBorrow = assetBorrow;

  const [token, setToken] = useState("");
  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };
  const tokenOptions = [
    { label: "eth", value: "ETH" },
    { label: "usdc", value: "USDC" },
    { label: "usdt", value: "USDT" },
    { label: "wbtc", value: "WBTC" },
    { label: "dai", value: "DAI" },
    { label: "frax", value: "FRAX" },
  ];

  const handleNetworkChain = (e) => {
    setNetwork(e.target.value);
  };

  const handleSupply = () => {};

  const handleClaim = () => {};

  const handleBorrow = () => {};

  const [openSupplyModal, setOpenSupplyModal] = useState(false);
  const [openClaimModal, setOpenClaimModal] = useState(false);
  const [openBorrowModal, setOpenBorrowModal] = useState(false);

  const handleSupplyBtn = () => {
    setOpenSupplyModal(true);
  };
  const handleClaimBtn = () => {
    setOpenClaimModal(true);
  };
  const handleBorrowBtn = () => {
    setOpenBorrowModal(true);
  };

  const handleCloseBtn = () => {
    setOpenBorrowModal(false);
    setOpenClaimModal(false);
    setOpenSupplyModal(false);
  };

  //edit the styling and make the zindex 2
  function SupplyModal() {
    return (
      <div className="supply-background">
        <div className="supply-container">
          <div className="supply-header">
            <button onClick={handleCloseBtn}>
              <img src={require("../images/back-arrow.png")} alt="" />
            </button>
            <p>Supply</p>
          </div>
          <div className="supply-body">
            <img src={require("../images/bayc.png")} alt="" />
            <p className="supply-name">BAYC</p>
            <p className="supply-confirm">
              Confirm you want to supply the BAYC worth 64.0 ETH as collateral
            </p>
            <button onClick={handleSupply}>Supply</button>
          </div>
        </div>
      </div>
    );
  }

  function ClaimModal() {
    return (
      <div className="claim-container">
        <div className="claim-header">
          <button onClick={handleCloseBtn}>
            <img src={require("../images/back-arrow.png")} alt="" />
          </button>
          <p className="ct-1">Claim</p>
          <p className="ct-2">ETH/USDC</p>
        </div>
        <div className="claim-body">
          <img src={require("../images/bayc.png")} alt="" className="ci-1" />
          <p className="ct-3">BAYC</p>
          <p className="ct-4">Worth</p>
          <img src={require("../images/eth.png")} alt="" className="ci-2" />
          <p className="ct-5">64.9</p>
          <p className="ct-6">Borrowed</p>
          <img src={require("../images/usdc.png")} alt="" className="ci-3" />
          <p className="ct-7">96,000</p>
          <p className="ct-8">APY</p>
          <p className="ct-9">7.5%</p>
          <p className="ct-10">Amount Owed</p>
          <img src={require("../images/usdc.png")} alt="" className="ci-4" />
          <p className="ct-11">103,200</p>
          <p className="ct-12">Duration</p>
          <p className="ct-13">365 Days</p>
          <p className="ct-14">Due Duration</p>
          <p className="ct-15">In 2 days</p>
          <button onClick={handleClaim}>Claim</button>
        </div>
      </div>
    );
  }

  function BorrowModal() {
    return (
      <div className="borrow-container">
        <div className="borrow-header1">
          <button onClick={handleCloseBtn}>
            <img src={require("../images/back-arrow.png")} alt="" />
          </button>
          <p className="bt-1">Borrow</p>
          <p className="bt-2">ETH/USDC</p>
        </div>
        <div className="borrow-selector">
          <Dropdown
            label={token}
            value={token}
            options={tokenOptions}
            onChange={handleTokenChange}
          />
        </div>
        <div className="borrow-body">
          <div className="amount-in">
            <img src={require("../images/usdc.png")} alt="" className="bi-1" />
            <p className="bt-3">USDC</p>
            <label>
              <input type="text" className="b-input" />
            </label>
            <p className="bt-4">BMax: 106,241.3USDC</p>
          </div>
          <div className="details">
            <img src={require("../images/eth.png")} alt="" className="bi-2" />
            <p className="bt-5">NFT Worth</p>
            <p className="bt-6">64.9</p>
            <p className="bt-7">APY</p>
            <p className="bt-8">7.5%</p>
            <p className="bt-9">Duration</p>
            <p className="bt-10">365 Days</p>
          </div>
          <button onClick={handleBorrow}>Borrow</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="top-details">
        <div className="net-worth">
          <img src={Currency} alt="currency logo" className="currency-logo" />
          <p className="networth-text">Net worth</p>
          {/*This should a variable returned as the value of users networth, default value used for now */}
          <p className="amount-1">$100,000</p>
        </div>
        <div>
          <p className="apy-text">Net APY</p>
          <p className="amount-2">--</p>
        </div>
        <div className="dnetwork-selector">
          <Dropdown
            label={"Network:" + network}
            value={network}
            options={networkOptions}
            onChange={handleNetworkChain}
          />
        </div>
      </div>
      <div className="main-content">
        <div className="supplies">
          <p className="text-1">Your supplies</p>
          {supply ? (
            <p className="text-2">{supply}</p>
          ) : (
            <p className="text-2">Nothing supplied yet</p>
          )}
        </div>
        <div className="borrows">
          <p className="text-3">Your borrows</p>
          {borrow ? (
            <p className="text-4">{borrow}</p>
          ) : (
            <p className="text-4">Nothing borrowed yet</p>
          )}
        </div>
        <div className="table-container">
          <div className="asset-supply">
            {/* <p className="text-5">Assets to supply</p> */}
            <div className="table-1">
              <img src={AssetSupply} alt="assets to supply" />
              <button className="button-1" onClick={handleSupplyBtn}>
                Supply
              </button>
              <button className="button-2">Supply</button>
              <button className="button-3" onClick={handleClaimBtn}>
                Claim
              </button>
            </div>
            {/* <table>
            <tr>
              <th>Assets</th>
              <th>Worth</th>
              <th>APY</th>
              <th>Supported Collateral</th>
              <th></th>
            </tr>
            {tableData1.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.asset}</td>
                  <td>{value.worth}</td>
                  <td>{value.apy}</td>
                  <td>{value.collateral}</td>
                  <td>
                    <button>{value.button}</button>
                  </td>
                </tr>
              );
            })}
          </table> */}
          </div>
          <div className="asset-borrow">
            {/* <p className="text-6">Assets to borrow</p> */}
            <div className="table-2">
              <img src={AssetBorrow} alt="Assets to borrow" />
              <button className="button-4" onClick={handleBorrowBtn}>
                Borrow
              </button>
              <button className="button-5" onClick={handleBorrowBtn}>
                Borrow
              </button>
              <button className="button-6">Borrow</button>
              <button className="button-7">Borrow</button>
              <button className="button-8" onClick={handleBorrowBtn}>
                Borrow
              </button>
              <button className="button-9">Borrow</button>
            </div>
          </div>
          {openSupplyModal && <SupplyModal />}
          {openClaimModal && <ClaimModal />}
          {openBorrowModal && <BorrowModal />}
        </div>
      </div>
    </>
  );
}

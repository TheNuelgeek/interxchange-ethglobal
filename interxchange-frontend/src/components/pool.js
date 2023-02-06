import Header from "./header";
import NetworkSelector from "./networkSelector";
import Dropdown from "./dropdown";
import { useState } from "react";
import "../styles/pool.css";

export default function Pool() {
  const [input1, setInput1] = useState(0);

  const handleInput1 = (e) => {
    setInput1(e.target.value);
  };

  const handleSubmit = () => {};

  const addPosition = () => {
    return (
      <>
        <Dropdown />
        <div className="deposit">
          <img src="" alt="" />
          <p>USDC</p>
          <label>
            <input type="text" value={input1} onChange={handleInput1} />
          </label>
          <p>Bal: 300,000.098 USDC</p>
        </div>
        <div className="lp-token">
          <img src="" alt="" />
          <p>ISwap Lp</p>
          <p>{input1 * 0.5}</p>
          <p>Equivalent in LP tokens</p>
        </div>
        <button onClick={handleSubmit}>Provide Position</button>
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="top-part">
        <p>Pools</p>
        <div className="network-selector1">
          <NetworkSelector />
        </div>
      </div>
      <div className="position">
        <button onClick={addPosition}>Add Position +</button>
        <p>Your active liquidity positions will appear here</p>
      </div>
    </>
  );
}

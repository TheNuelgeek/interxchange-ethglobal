import Header from "./header";
import NetworkSelector from "./networkSelector";

export default function Stake() {
  return (
    <>
      <Header />
      <div className="top-section">
        <p>Staking</p>
        <NetworkSelector />
      </div>
      <div className="main-body">
        <button>Stake</button>
        <label>
          Enter Position
          <input type="text" />
        </label>
      </div>
    </>
  );
}

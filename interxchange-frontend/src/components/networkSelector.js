import Dropdown from "./dropdown";
import { useState } from "react";

export default function NetworkSelector() {
  const [network, setNetwork] = useState("Ethereum");
  const networkOptions = [
    { label: "Ethereum", value: "Ethereum" },
    { label: "Polygon", value: "Polygon" },
  ];

  const handleNetworkChain = (e) => {
    setNetwork(e.target.value);
  };

  return (
    <Dropdown
      label={"Network:" + network}
      value={network}
      options={networkOptions}
      onChange={handleNetworkChain}
    />
  );
}

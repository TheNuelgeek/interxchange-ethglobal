import { useState } from "react";
import { ConnectButton } from "@web3uikit/web3";
import Dashboard from "./dashboard";

export default function ConnectPage() {
  const [connect, setConnect] = useState(false);
  const handleConnect = (e) => {};

  const loadDashboard = () => {};
  return (
    <>
      <img src="" alt="" />
      <ConnectButton />
      {connect ? (
        loadDashboard()
      ) : (
        <p>Connect your wallet to view your dashboard</p>
      )}
    </>
  );
}

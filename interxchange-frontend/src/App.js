import LandingPage from "./components/landingPage";
import Dashboard from "./components/dashboard";
import Market from "./components/market";
import Pool from "./components/pool";
import Stake from "./components/stake";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="market" element={<Market />} />
      <Route path="pool" element={<Pool />} />
      <Route path="stake" element={<Stake />} />
    </Routes>
  );
}

export default App;

import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="top-section">
        <a href="/">
          <h1 className="header">InterXchange</h1>
        </a>
        <button className="connect-btn">0x79B0…4E71</button>
      </div>
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="menu-item">
            <a href="/market">Market</a>
          </li>
          <li className="menu-item">
            <a href="/pool">Pool</a>
          </li>
          <li className="menu-item">
            <a href="/stake">Stake</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

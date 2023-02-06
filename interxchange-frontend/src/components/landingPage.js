import "../styles/landingPage.css";
import logo from "../images/shape7.png";
import dot from "../images/vector.png";
import component1 from "../images/component1.png";
import component2 from "../images/component2.png";
import SupportedNFTs from "./supportedNFTs";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const Logo = logo;
  const Dot = dot;
  const Component1 = component1;
  const Component2 = component2;

  return (
    <div className="container">
      <h1 className="heading">InterXchange</h1>
      <div>
        <div className="logo">
          <img src={Logo} alt="interxchange logo" />
        </div>
        <div className="vectors">
          <img src={Dot} alt="vector point" />
        </div>
      </div>
      <div className="side-text">
        <h2>Welcome to InterXchange</h2>
        <p>
          the platform that allows you to borrow ERC-20 tokens using your
          ERC-721 tokens as collateral. Are you tired of having to sell your
          valuable ERC-721 assets just to borrow ERC-20 tokens? With Interswap,
          you can easily borrow the tokens you need without having to sacrifice
          your assets.
        </p>
      </div>
      <Link to="dashboard">
        <button className="launch-btn">Launch App</button>
      </Link>
      <div>
        <p className="extra-text">
          Start experiencing the future of token borrowing with InterXchange.
        </p>
        <img
          src={Component1}
          alt="component connections"
          className="component1"
        />
        <img
          src={Component2}
          alt="component connections"
          className="component2"
        />
      </div>
      <div>
        <SupportedNFTs />
      </div>
      <Footer />
    </div>
  );
}

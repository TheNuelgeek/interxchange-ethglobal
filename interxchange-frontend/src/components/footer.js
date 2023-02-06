import credits from "../images/credits.png";
import "../styles/footer.css";

export default function Footer() {
  const Credits = credits;

  return (
    <div className="footer">
      <img src={Credits} alt="interxchange copyright" className="footer-img" />
    </div>
  );
}

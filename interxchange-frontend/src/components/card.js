import "../styles/card.css";

export default function Card({ image, heading, body, pageUrl }) {
  return (
    <div className="card">
      <a href={pageUrl} key={pageUrl}>
        <img src={image} alt={heading} className="card-img" />
        <p className="card-heading">{heading}</p>
        <p className="card-body">{body}</p>
        <button className="card-btn"></button>
      </a>
    </div>
  );
}

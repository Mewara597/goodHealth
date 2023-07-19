/* eslint-disable react/prop-types */
export default function Advertisment({ props }) {
  return (
    <div
      className={
        props.label.includes("First") ? "carousel-item active" : "carousel-item"
      }
      key={props.label}
      style={{ height: "20px" }}
    >
      <img src={props.src} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>{props.label}</h5>
        <p>{props.content}.</p>
      </div>
    </div>
  );
}

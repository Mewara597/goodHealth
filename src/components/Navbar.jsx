import viteLogo from "/vite.svg";

export default function Navbar() {
  return (
    <ul className="nav justify-content-between align-items-center">
      <img src={viteLogo} className="logo nav-item" alt="Vite logo" />

      <li className="nav-item">
        <a href="#" style={{ fontSize: "2.8rem" }}>
          Saturn
          <span style={{ writingMode: "vertical-rl", fontSize: ".5rem" }}>
            By CNC
          </span>
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="h1 ms-4">
          <i className="m-2 fa-solid fa-cart-shopping"></i>
        </a>
      </li>
    </ul>
  );
}

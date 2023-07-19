import Navbar from "./components/Navbar";
import "./App.css";
import "./Slider.css";
import "./ImageSlider.css";
import ImageSlider from "./components/ImageSlider";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />

        <p className="display-6 fw-light py-4">
          Welcome, <b className="fw-bold">June!</b>
        </p>

        <div className="nav justify-content-around">
          <div className="box" style={{ background: "#CDCCF3" }}>
            <i className="fa-solid fa-right-to-bracket"></i>
            TRACK
          </div>
          <div className="box" style={{ background: "#F5FCC6" }}>
            <i className="fa-solid fa-layer-group"></i>
            WALLET
          </div>
          <div className="box" style={{ background: "#C5EEFD" }}>
            <i className="fa-solid fa-envelope"></i>
            BLOGS
          </div>
          <div className="box" style={{ background: "#FDEEE0" }}>
            <i className="fa-solid fa-handshake"></i>
            CONSULT
          </div>
        </div>

        <div className="my-4">
          <div className="wellnessOverview m-auto p-4">
            <div>
              <h4>Wellness Overview</h4>
              <p>
                <span className="display-4">40</span>
                <span className="badge rounded-pill bg-danger">Overwieght</span>
              </p>
              <small className="fw-light">Your current BMI</small>
            </div>
            <div className="stats">
              <div className="stat badge rounded-pill bg-light text-dark p-2 px-3">
                <i className="fa-solid fa-fire"></i>
                80.5 kgs
              </div>
              <div className="stat badge rounded-pill bg-light text-dark p-2 px-3">
                <i className="fa-solid fa-city"></i>
                7/8 hours
              </div>
              <div className="stat badge rounded-pill bg-light text-dark p-2 px-3">
                <i className="fa-solid fa-water"></i>
                4/8 Glasses
              </div>
            </div>
          </div>
        </div>

        <Carousel />
      </div>
      <ImageSlider></ImageSlider>
    </>
  );
}

export default App;

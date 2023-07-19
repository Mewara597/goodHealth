// // import React from "react";
// import "./Slider.css";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// const ReactCardSlider = (props) => {
//   const slideLeft = () => {
//     var slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft + 500;
//   };

//   const slideRight = () => {
//     var slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft - 500;
//   };

//   return (
//     <div id="main-slider-container">
//       <MdChevronLeft
//         size={40}
//         className="slider-icon left"
//         onClick={slideLeft}
//       />
//       <div id="slider">
//         {props.slides.map((slide, index) => {
//           return (
//             <div
//               className="slider-card"
//               key={index}
//               onClick={() => slide.clickEvent()}
//             >
//               <div
//                 className="slider-card-image"
//                 style={{
//                   backgroundImage: `url(${slide.image})`,
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//               <p className="slider-card-title">{slide.title}</p>
//               <p className="slider-card-description">{slide.description}</p>
//             </div>
//           );
//         })}
//       </div>
//       <MdChevronRight
//         size={40}
//         className="slider-icon right"
//         onClick={slideRight}
//       />
//     </div>
//   );
// };
// export default ReactCardSlider;

// // usage

//  const slides = [
//     {
//       image: "https://picsum.photos/200/300",
//       title: "This is a title",
//       description: "This is a description",
//       clickEvent: sliderClick,
//     },
//     {
//       image: "https://picsum.photos/600/500",
//       title: "This is a second title",
//       description: "This is a second description",
//       clickEvent: sliderClick,
//     },
//   ];

//   const App = ()=>{

//   return (
//     <div id="body">
//       <ReactCardSlider slides={slides} />
//     </div>
//   );
//   }

import { useState } from "react";
import { motion } from "framer-motion";
import shiva from "../assets/shiva2.png";
import ganapathi from "../assets/ganapathi2.png";
import nagar from "../assets/nagar2.png";
import madan_thampuran from "../assets/madan_thamburan2.png";
import './Upadevas.css';

const Upadevas = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3 ]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 4
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 3) % 4
      );

      return updatedIndexes;
    });
  };

  const images = [
    { src:shiva , name:'Lord Shiva' },
    { src:ganapathi , name:'Lord Ganapathi' },
    { src:madan_thampuran , name:'Lord Madan Thampuran' },
    { src:nagar , name:'Lord Nagar' },
    
  ];

  const positions = ["center", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-50%", scale: 0.7, zIndex: 3 },
    // left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };


  return (
    <><h1>Upadevas</h1>
    <div className="main-box">

      <div className="flex-center-column">
        {/* <h1>Upadevas</h1> */}

        {images.map((image, index) => (
          <motion.div
            key={index}
            className="image-container"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          >
            <img
              src={image.src}
              alt={image.name}
              className="motion-img" />
            <div className="image-name">{image.name}</div>
          </motion.div>
        ))}
        <div className="button-container">
          <button
            className="custom-button"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="custom-button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>

      </div>
    </div></>
  );
};

export default Upadevas;


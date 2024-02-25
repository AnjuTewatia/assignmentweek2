import React, { useState } from "react";
import "../../Styles/Gallery.css";
const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);

  //  price
  // const [isHovereds, setIsHovereds] = useState(false);
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //  2nd

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  // 3rd
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  // 4th
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  // 5th
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };
  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };

  const handleMouseEnter6 = () => {
    setIsHovered6(true);
  };

  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };

  // 7
  const handleMouseEnter7 = () => {
    setIsHovered7(true);
  };

  const handleMouseLeave7 = () => {
    setIsHovered7(false);
  };

  const generateRandomTitle = () => {
    const titles = ["sky blue", "sunshine", "nature", "abcd", "Sunrise"];
    return titles[Math.floor(Math.random() * titles.length)];
  };

  // Function to generate random price
  const generateRandomPrice = () => {
    return (Math.random() * 100).toFixed(2); // Generates a random price between 0 and 100
  };

  return (
    <div>
      <div>
        <div id="container">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHovered ? "colorful" : "grayscale"}
            />
            <h2>{generateRandomTitle()}</h2>
            <p>${generateRandomPrice()}</p>
          </div>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              className={isHovered1 ? "colorful" : "grayscale"}
            />
            <h2>{generateRandomTitle()}</h2>
            <p>${generateRandomPrice()}</p>
          </div>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              className={isHovered2 ? "colorful" : "grayscale"}
            />
            <h2>{generateRandomTitle()}</h2>
            <p>${generateRandomPrice()}</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              className={isHovered3 ? "colorful" : "grayscale"}
            />
            <h2>{generateRandomTitle()}</h2>
            <p>${generateRandomPrice()}</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
              className={isHovered4 ? "colorful" : "grayscale"}
            />
            <h2>{generateRandomTitle()}</h2>
            <p>${generateRandomPrice()}</p>
          </div>

          {/* ***************** */}

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
              className={isHovered5 ? "colorful" : "grayscale"}
            />
            <h2>{generateRandomTitle()}</h2>
            <p>${generateRandomPrice()}</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter6}
              onMouseLeave={handleMouseLeave6}
              className={isHovered6 ? "colorful" : "grayscale"}
            />
            <h2>{generateRandomTitle()}</h2>
            <p>${generateRandomPrice()}</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter7}
              onMouseLeave={handleMouseLeave7}
              className={isHovered7 ? "colorful" : "grayscale"}
            />
            <h2>{generateRandomTitle()}</h2>
            <p>${generateRandomPrice()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

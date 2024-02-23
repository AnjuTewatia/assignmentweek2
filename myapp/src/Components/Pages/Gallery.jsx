import React, { useState } from "react";
import "../../Styles/Gallery.css";
const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // const generateRandomTitle = () => {
  //   const titles = [
  //     "Beautiful Landscape",
  //     "City Skyline",
  //     "Mountain Adventure",
  //     "Sunny Beach",
  //     "Enchanting Forest",
  //   ];
  //   return titles[Math.floor(Math.random() * titles.length)];
  // };

  // const generateRandomPrice = () => {
  //   return (Math.random() * 100).toFixed(2); // Random price between 0 and 100
  // };

  // const title = generateRandomTitle();
  // const price = generateRandomPrice();
  return (
    <div>
      <div>
        <div id="container">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              // className={isHovered ? "colorful" : "grayscale"}
            />
            {/* <h2>{title}</h2>
            <p>{price}</p> */}
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHovered ? "colorful" : "grayscale"}
            />
            {/* <h2>{title}</h2>
            <p>{price}</p> */}
          </div>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHovered ? "colorful" : "grayscale"}
            />
            {/* <h2>{title}</h2>
            <p>{price}</p> */}
          </div>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHovered ? "colorful" : "grayscale"}
            />
            {/* <h2>{title}</h2>
            <p>{price}</p> */}
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHovered ? "colorful" : "grayscale"}
            />
            {/* <h2>{title}</h2>
            <p>{price}</p> */}
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHovered ? "colorful" : "grayscale"}
            />
            {/* <h2>{title}</h2>
            <p>{price}</p> */}
          </div>

          {/* ***************** */}

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDf-l5V5IItP3-9GMW3K2m3XLmX6-IxjQPw&usqp=CAU"
              alt="abcd"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHovered ? "colorful" : "grayscale"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

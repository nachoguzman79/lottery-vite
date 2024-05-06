import React, { useState } from "react";
import imageMap from "./ImageMap";

function RandomImage() {
  const [numbersUsed, setNumbersUsed] = useState([]);
  const [currentImage, setCurrentImage] = useState("");

  // Generate a random number between 1 and 54
  const generateRandomNumber = () => {
    if (numbersUsed.length === 54) {
      alert("All numbers have already been used..");
      return;
    }

    let randomNumber;

    // Generate a random number that has not been used
    do {
      randomNumber = Math.floor(Math.random() * 54) + 1;
    } while (numbersUsed.includes(randomNumber));

    // Update the list of used numbers
    setNumbersUsed([...numbersUsed, randomNumber]);

    // Use map to get correct image file name
    const imageName = imageMap[randomNumber];

    // Update the current image with the image path
    setCurrentImage(`/assets/${imageName}`);
  };

  // Restart
  const resetGame = () => {
    setNumbersUsed([]);
    setCurrentImage("");
  };

  return (
    <div>
      <h1>Mexican Lottery - Get your lucky number!</h1>
      <button onClick={generateRandomNumber}>Go!</button>
      <button onClick={resetGame}>Restart</button>
      <div>
        <p>Number list: {numbersUsed.join(", ")}</p>
      </div>
      {currentImage && (
        <div>
          <img
            src={currentImage}
            alt="Random number"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      )}
    </div>
  );
}

export default RandomImage;

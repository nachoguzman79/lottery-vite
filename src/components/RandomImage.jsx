import React, { useState } from "react";
import imageMap from "./ImageMap";
import verses from "./Verses";
import "../styles/RandomImage.css";
import bingoMexicano from "../image/bingoMexicano.png";



function RandomImage() {
  const [numbersUsed, setNumbersUsed] = useState([]);
  const [currentImage, setCurrentImage] = useState("");
  const [currentVerse, setCurrentVerse] = useState(null);
  const [hasClickedGo, setHasClickedGo] = useState(false); // Nueva variable de estado

  
  const generateRandomNumber = () => { // Random number: 1 - 54
    if (numbersUsed.length === 54) {
      alert("All numbers have already been used.");
      return;
    }

    let randomNumber;

    // get a random number never used
    do {
      randomNumber = Math.floor(Math.random() * 54) + 1;
    } while (numbersUsed.includes(randomNumber));

    // Update numbers that were ealready used
    setNumbersUsed([...numbersUsed, randomNumber]);
    setHasClickedGo(true);

    // Use Map to get the correct image name
    const imageName = imageMap[randomNumber];

  
    setCurrentImage(`/assets/${imageName}`);

    // Random verse info and random number
    const verseInfo = verses.find((verse) => verse.id === randomNumber);

    setCurrentVerse(verseInfo);
  };

  // Restart Game
  const resetGame = () => {
    setNumbersUsed([]);
    setCurrentImage("");
    setCurrentVerse(null);
    setHasClickedGo(false); // makes Restart y Cards playing not appear after clicking GO!
  };

  return (
    <div className="main">
      <div className="h1-h2">
      <h1 className="h1">Mexican Lottery</h1>
      <h2 className="h2">Get your lucky card!</h2>
    </div>
      

    
      {!currentImage && (
        <div className="homepage-container">
          <img className="homepage-img" src="/src/image/bingoMexicano.png" 
          alt="mexican lottery" />
        </div>
      )}

      
      <div className="button-container">
        <button onClick={generateRandomNumber}>PLAY!</button>
        {hasClickedGo && (
        <button onClick={resetGame}>RESTART</button>
       )}
        
      </div>

      {hasClickedGo && (
        

        <div>
          <p className="numbers-playing">
            Cards playing: {numbersUsed.join(", ")}
          </p>
        </div>
      )}

    

      <div className="image-txt">
        
      </div>

      

      {currentImage && (
        <div className="imageDiv">
          <img className="img" src={currentImage} alt="Random number" />
        </div>
      )}

      {currentVerse && (
        <div className="verseDiv">
          <h3 className="verse-title">{currentVerse.title}</h3>
          <p className="verse-text">"{currentVerse.verse[0]}"</p>
          <p className="verse-text">"{currentVerse.verse[1]}"</p>
        </div>
      )}
    </div>
  );
}

export default RandomImage;

// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact-us");
  };

  return (
    <>
      <div className="texto">
        <h2>Mexican Lottery</h2>
        <h3>how does it work?</h3>
        <p>
          The Mexican lottery is a board game of chance, similar to bingo, and
          is played on a deck of cards.
          Every image has a name and an assigned number. Each player has at
          least a board with a randomly created grid of pictures with their
          corresponding name and number. Players choose a board to play with, it
          has a different selection of images. The traditional Lotería card deck
          is composed of a set of 54 different cards, each with a different
          picture.
        </p>
        <p>
          To start the game, the caller shuffles the deck. One by one, the
          caller picks a card from the deck and announces it, using a
          verse before reading the card name. Each player locates the matching
          pictogram of the card just announced on their board and marks it off
          with a chip or other kind of marker. The winner is the
          first player that shouts "¡Lotería!" right after completing a tabla or
          a previous agreed pattern: row, column, diagonal,
          four corners, or four in a square.
        </p>
      </div>
    </>
  );
};

export default AboutUs;

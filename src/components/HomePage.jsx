import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/random-image">Generador de Imágenes Aleatorias</Link>
  </>
);

export default HomePage;

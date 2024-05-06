// import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  // const [shouldNavigate, setShouldNavigate] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    // setShouldNavigate(true);
    navigate("/contact-us")
  };

  return (
    <>
      <p> About us</p>
      <button onClick={handleNavigation}>Contact button</button>
      {/* {shouldNavigate && navigate("/")} */}
    </>
  );
};

export default AboutUs;

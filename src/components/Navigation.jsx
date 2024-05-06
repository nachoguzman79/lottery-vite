import { Link } from "react-router-dom";
import "../styles/NavigationStyle.css";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "AboutUs", to: "/about-us", id: 2 },
    { name: "Contact", to: "/contact-us", id: 3 },
    
  ];
  return (
    <nav className="container">
      <ul>
        {items.map((item) => {

          return <li key={item.id}>
            <Link to={item.to}>{item.name}</Link>
          </li>;
        })}
        
      </ul>
    </nav>
  );
};

export default Navigation;

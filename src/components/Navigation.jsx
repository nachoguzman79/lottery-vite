import { Link } from "react-router-dom";
import "../styles/NavigationStyle.css";

const Navigation = () => {
  const items = [
    { name: "HOME", to: "/", id: 1 },
    { name: "RULES", to: "/about-us", id: 2 },
    
    
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

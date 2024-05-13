import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import NotFound from "./NotFound";
import RandomImage from './RandomImage';



const routes = [
    { path: "/", element: <HomePage/>, id: 1 },
    { path: "/about-us", element: <AboutUs/>, id: 2 },
    { path: "*", element: <NotFound/>, id: 4 },
    { path: '/random-image', element: <RandomImage />, id: 5 }
    
   
];

export default routes;
  
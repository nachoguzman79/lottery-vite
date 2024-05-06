import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./components/Routes";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => {
            return <Route key={route.id} {...route} />;
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

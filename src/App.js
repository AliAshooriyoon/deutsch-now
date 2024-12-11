import "./App.css";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./Component/Pages/Home/Home";
import routes from "./Component/Pages/routes";
import Footer from "./Component/Pages/Footer/Footer";
import Header from "./Component/Pages/Header/Header";
const App = () => {
  const myRotes = useRoutes(routes);
  return (
    <>
      <Header />
      <div className="app">
        {myRotes}
        <Footer />
      </div>
    </>
  );
};

export default App;

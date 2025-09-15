import "./App.css";
import { useRoutes } from "react-router-dom";
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
// A litle test for working with git
export default App;

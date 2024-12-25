import Login from "./Login/Login";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Download from "./Download/Download";
const Routes = [
  { element: <Home />, path: "/" },
  { element: <Download />, path: "/download" },
  { element: <Login />, path: "/account/login" },
];

export default Routes;

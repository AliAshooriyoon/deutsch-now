// import "Login.css"
import { useState } from "react";
import "./Login.css";
const Login = () => {
  const [timer, setTimer] = useState(1);
  const number = 12;
  return (
    <div className="login">
      Login Page Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
      architecto assumenda, atque distinctio dolorem doloremque explicabo iste
      itaque provident ratione sint sit unde. Ex ipsa quaerat quod repudiandae
      rerum totam.
    </div>
  );
};

export default Login;

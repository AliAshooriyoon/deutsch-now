// import "Login.css"
// This is Login Page
// import { useState } from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login_form">
        <div className="input_value">
          <input type="text" className="input_form userName"></input>
          <input type="text" className="input_form password" />
        </div>
      </div>
    </div>
  );
};

export default Login;

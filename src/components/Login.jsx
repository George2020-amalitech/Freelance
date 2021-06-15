import React from "react";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="submain">
          <h1>Login to Connect</h1>
          <form className="form" action="">
            <input type="text" placeholder="Email" />
            <br />
            <label htmlFor=""></label>
            <input type="password" placeholder="Password" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

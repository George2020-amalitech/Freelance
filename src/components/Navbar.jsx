import React from "react";
import "./all.css";

function Narbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          CONN<i id="bar" class="fa fa-bars" aria-hidden="true"></i>
          ECT
        </div>
        <ul className="nav-links">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Browse</a>
          </li>
          <li>
            <a>Log In</a>
          </li>
          <li>
            <a>Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Narbar;

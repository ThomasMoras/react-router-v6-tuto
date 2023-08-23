import React from "react";

export default function NavBar() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          {/* <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/profile"
            />
          </li> */}
        </ul>
      </header>
    </div>
  );
}

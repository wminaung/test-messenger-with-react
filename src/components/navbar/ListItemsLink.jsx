import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function ListItemsLink() {
  const [btn, setBtn] = useState({ click: true });
  let handleChange = () => {
    const animeBar = document.querySelectorAll(".animeBar");
    const dd = document.querySelector(".dd");
    if (btn.click) {
      dd.classList.remove("dno");
      setBtn({ click: false });
      animeBar.forEach((item, i, arr) => {
        arr[i].classList.add("bar" + (i + 1));
      });
    } else {
      dd.classList.add("dno");
      setBtn({ click: true });
      animeBar.forEach((item, i, arr) => {
        arr[i].classList.remove("bar" + (i + 1));
      });
    }
  };
  return (
    <div className="navBarP">
      <div className="hamburgerMenu" onClick={handleChange}>
        <div className="animeBar "></div>
        <div className="animeBar "></div>
        <div className="animeBar "></div>
      </div>
      <div className="dd dno">
        <ul className="navbarHolder">
          <Link className="nav-item p-3" to="/test-messenger/features">
            Features
          </Link>
          <Link className="nav-item p-3" to="/test-messenger/desktop">
            Desktop app
          </Link>
          <Link className="nav-item p-3" to="/test-messenger/privacy">
            Privacy and safety
          </Link>
          <Link className="nav-item p-3" to="/test-messenger/dev">
            For developers
          </Link>
        </ul>
      </div>
    </div>
  );
}
export default ListItemsLink;

/* <div className="dropdown">
        <Link
          to="#"
          className="btn btn-secondary dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </Link>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            {" "}
            <Link className="nav-item p-2" to="/rooms">
              Rooms
            </Link>
          </li>
          <li>
            {" "}
            <Link className="nav-item p-2" to="/features">
              Features
            </Link>
          </li>
          <li>
            <Link className="nav-item p-2" to="/desktop">
              Desktop app
            </Link>
          </li>
          <li>
            {" "}
            <Link className="nav-item p-2" to="/privacy">
              Privacy and safety
            </Link>
          </li>
          <li>
            {" "}
            <Link className="nav-item p-2" to="/dev">
              For developers
            </Link>
          </li>
        </ul>
      </div> */

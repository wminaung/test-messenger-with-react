import React from "react";
import ListItemsLink from "./ListItemsLink";
import { Link } from "react-router-dom";

let Nav = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light border-bottom sticky-top ">
        <div className="container d-flex  ">
          <Link to="/test-messenger/">
            <img
              className="zzz"
              src={
                "https://scontent.frgn7-3.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-5&_nc_sid=6825c5&_nc_ohc=XydwHsiUPmYAX9s5ofR&_nc_ht=scontent.frgn7-3.fna&oh=00_AT_bDr80su2BB8aMOPFpBM8dhpwBNR_GYIKzpethuOjFKg&oe=621E99BD"
              }
              alt="messenger logo"
              width="40"
            />
          </Link>
          <ul className="nav">
            <ListItemsLink />
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;

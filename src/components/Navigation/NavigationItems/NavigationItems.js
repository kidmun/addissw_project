import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItems.css";

const navItems = [
  { id: "add-user", text: "Add User", link: "/add-user", auth: true },
];

const NavigationItems = (props) => {
  return (
    <React.Fragment>
      {navItems.map((item) => (
        <li
          key={item.id}
          className={["navigation-item", props.mobile ? "mobile" : ""].join(
            " "
          )}
        >
          <NavLink to={item.link} onClick={props.onChoose}>
            {item.text}
          </NavLink>
        </li>
      ))}
    </React.Fragment>
  );
};

export default NavigationItems;

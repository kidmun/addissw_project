import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";
import MobileToggle from "../MobileToggle/MobileToggle";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <nav className="main-nav">
      <MobileToggle onOpen={props.onOpenMobileNav} />
      <div className="main-nav__logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
      <div className="spacer" />
      <ul className="main-nav__items">
        <NavigationItems />
      </ul>
    </nav>
  );
};

export default MainNavigation;

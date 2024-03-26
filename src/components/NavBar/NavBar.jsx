import UserAccountButton from "../UserAccountButton";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const NavBar = ({ userLoggedIn }) => {
  return (
    <div className="relative flex justify-between m-9">
      <button className="rounded-full bg-mint focus:outline-0 hover:border-mint transition-all ease-linear duration-500">
        <NavLink
          to={"/calendar"}
          className="text-grey hover:text-grey hover:no-underline"
        >
          GO TO CALENDAR
        </NavLink>
      </button>
      <UserAccountButton userLoggedIn={userLoggedIn} />
    </div>
  );
};

NavBar.propTypes = {
  userLoggedIn: PropTypes.bool,
};

export default NavBar;

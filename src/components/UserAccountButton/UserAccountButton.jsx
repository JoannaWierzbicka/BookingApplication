import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const UserAccountButton = ({ userLoggedIn }) => {
  return (
    <button className="rounded-full py-10 px-7 text-grey bg-pink focus:outline-0 hover:border-pink transition-all ease-linear duration-500">
      {userLoggedIn ? (
        <NavLink to="./calendar">USER ACCOUNT</NavLink>
      ) : (
        <NavLink to="./login">LOGIN</NavLink>
      )}
    </button>
  );
};

UserAccountButton.propTypes = {
  userLoggedIn: PropTypes.bool,
};

export default UserAccountButton;

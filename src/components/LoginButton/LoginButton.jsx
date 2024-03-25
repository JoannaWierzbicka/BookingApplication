import { NavLink } from "react-router-dom";

export const LoginButton = () => {
  return (
    <button className="rounded-full py-10 px-7 text-grey bg-pink focus:outline-0 hover:border-pink transition-all ease-linear duration-500">
      <NavLink to="login">LOGIN</NavLink>
    </button>
  );
};

export default LoginButton;

import { useState } from "react";
import { NavLink } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for submitting the form (e.g., API call) here
  };

  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-md p-4 w-full max-w-xs mx-auto">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
        <div>
          Dont have account?
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            <NavLink to={"/create-account"}>CREATE</NavLink>
          </button>
        </div>
      </form>
      <NavLink to={"/"} className="text-blue-500 hover:text-blue-700 mt-2">
        Back to Main
      </NavLink>
    </div>
  );
};

export default LoginPage;

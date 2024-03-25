import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import signUp from "../../auth/signUp";
import getUserData from "../../auth/getUserData";
import createUserId from "../../helpers/createUserId";
import FireBaseAPI from "../../api/firebaseApi";
import { validateFormCreate } from "../../helpers/validation";

export const CreateAccountPage = () => {
  const data = new FireBaseAPI();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [userData, setUserData] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const onUserLogin = () => {
    getUserData().then((data) => {
      setUserData(data);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = validateFormCreate(email, password, repeatPassword);
    if (password !== repeatPassword) {
      errors = [...errors, "Passwords do not match!"];
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
    }
    setErrorMessages(errors);

    if (errors.length === 0) {
      try {
        await signUp(email, password);
        onUserLogin();
        const newUserId = createUserId(email);
        await data.addNewUser(newUserId);
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        alert("Account created successfully!");
      } catch (error) {
        setErrorMessages([error.message]);
      }
    }
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
        <div className="mb-4">
          <label htmlFor="repeatPassword" className="block text-gray-700">
            Repeat password:
          </label>
          <input
            type="password"
            id="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          {errorMessages.map((message, index) => (
            <div key={index} className="text-red-500 text-sm">
              {message}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Create Account
        </button>
        <div>
          Already have an account?
          <NavLink
            to={"/login"}
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            LOGIN
          </NavLink>
        </div>
      </form>
      <NavLink to={"/"} className="text-blue-500 hover:text-blue-700 mt-2">
        Back to Main
      </NavLink>
    </div>
  );
};

export default CreateAccountPage;

import { useState, useEffect } from "react";
import Background from "../Background";
import NavBar from "../NavBar";
import checkIfUserIsLoggedIn from "../../auth/checkIfUserIsLoggedIn";

export const MainPage = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const isUserLoggedIn = await checkIfUserIsLoggedIn();
      setUserLoggedIn(isUserLoggedIn);
    }
    fetchData();
  }, []);

  return (
    <>
      {" "}
      <Background>
        <NavBar userLoggedIn={userLoggedIn}/>
      </Background>
    </>
  );
};

export default MainPage;

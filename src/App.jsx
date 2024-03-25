import "./App.css";
import MainPage from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar";
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />}></Route>
      <Route path={"/calendar"} element={<Calendar />}></Route>
      <Route path={"/login"} element={<LoginPage />}></Route>
      <Route path={"/create-account"} element={<CreateAccountPage/>}></Route>
    </Routes>
  );
}

export default App;

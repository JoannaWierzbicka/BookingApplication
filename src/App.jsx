import "./App.css";
import MainPage from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />}></Route>
      <Route path={"/calendar"} element={<Calendar />}></Route>
    </Routes>
  );
}

export default App;

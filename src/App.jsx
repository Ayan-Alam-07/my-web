// import "./App.css"; apply in the jackpot sections!!
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import JackpotPg01 from "./Components/JakSecPg01";
import JackpotPg02 from "./Components/JakSecPg02";
import JackNav from "./Components/JakSecNav";
import JakSecFooter from "./Components/JakSecFoot";

const Jackpot = () => {
  return (
    <>
      <Home></Home>
      {/* <JackNav />
      <Routes>
        <Route path="/" element={<JackpotPg02 />} />
        <Route path="/JackpotPg02" element={<JackpotPg01 />} />
      </Routes>
      <JakSecFooter /> */}
    </>
  );
};
export default Jackpot;

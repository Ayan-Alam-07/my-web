// import "./App.css"; apply in the jackpot sections!!
import Home from "./Components/Home/Home";
import Wallet from "./Components/Wallet/Wallet";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Wallet" element={<Wallet />}></Route>
    </Routes>
  );
};
export default App;

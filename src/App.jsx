import "./AppLayout.css"; //apply App.css in the jackpot sections!!
import Home from "./Components/Home/Home";
import Wallet from "./Components/Wallet/Wallet";
import Payout from "./Components/Wallet/Payout/Payout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Wallet" element={<Wallet />}></Route>
      <Route path="/Payout" element={<Payout />}></Route>
    </Routes>
  );
};
export default App;

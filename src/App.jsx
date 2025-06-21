import "./AppLayout.css"; //apply App.css in the jackpot sections!!
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import Wallet from "./Components/Wallet/Wallet";
import Payout from "./Components/Wallet/Payout/Payout";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Wallet" element={<Wallet />}></Route>
        <Route path="/Payout" element={<Payout />}></Route>
      </Routes>
    </>
  );
};
export default App;

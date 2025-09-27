import "./AppLayout.css"; //apply App.css in the jackpot sections!!
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import Wallet from "./Components/Wallet/Wallet";
import Payout from "./Components/Wallet/Payout/Payout";
import Task from "./Components/Home/Task/Task";
import Giveaway from "./Components/Home/Giveaway/Giveaway";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import TaskOptionChecker from "./Components/Home/Task/TaskOptionChecker";
import ExchangeCenter from "./Components/Home/ExchangeCenter/ExchangeCenter";
import Bonus from "./Components/Home/Bonus/Bonus";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Wallet" element={<Wallet />}></Route>
        <Route path="/Payout" element={<Payout />}></Route>
        <Route path="/captcha-tasks" element={<Task />}></Route>
        <Route path="/giveaway-code" element={<Giveaway />}></Route>
        <Route
          path="/TaskOptionChecker"
          element={<TaskOptionChecker />}
        ></Route>
        <Route path="/exchange-center" element={<ExchangeCenter />}></Route>
        <Route path="/watchAd-bonus" element={<Bonus />}></Route>
      </Routes>
    </>
  );
};
export default App;

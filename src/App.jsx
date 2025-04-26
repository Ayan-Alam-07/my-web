// import "./App.css"; apply in the jackpot sections!!
import Home from "./Components/Home/Home";
import WalletUi from "./Components/Wallet/WalletUi";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/WalletUi" element={<WalletUi />}></Route>
      </Routes>
    </>
  );
};
export default App;

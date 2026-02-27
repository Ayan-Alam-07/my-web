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
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import PublicOnlyRoute from "./Components/PublicOnlyRoute/PublicOnlyRoute";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* public routes no login required */}
        <Route
          path="/"
          element={
            <PublicOnlyRoute>
              <LandingPage />
            </PublicOnlyRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <PublicOnlyRoute>
              <Register />
            </PublicOnlyRoute>
          }
        ></Route>
        <Route
          path="/forgot-password"
          element={
            <PublicOnlyRoute>
              <ForgotPassword />
            </PublicOnlyRoute>
          }
        />

        {/* private route login required */}
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/Wallet"
          element={
            <ProtectedRoute>
              <Wallet />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/Payout"
          element={
            <ProtectedRoute>
              <Payout />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/captcha-tasks"
          element={
            <ProtectedRoute>
              <Task />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/giveaway-code"
          element={
            <ProtectedRoute>
              <Giveaway />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/TaskOptionChecker"
          element={
            <ProtectedRoute>
              <TaskOptionChecker />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/exchange-center"
          element={
            <ProtectedRoute>
              <ExchangeCenter />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/watchAd-bonus"
          element={
            <ProtectedRoute>
              <Bonus />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default App;

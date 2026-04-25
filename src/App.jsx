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
import Loader from "./Components/Loader/Loader";
import { useList } from "./Context/ContextStore";
import Referral from "./Components/Reffer/Reffer";
import ReferralHistory from "./ReferralHistory/ReferralHistory";
import WatchAd from "./Components/WatchAD/WatchAd";
import DailyBonus from "./Components/DailyBonus/DailyBonus";
import TapTokenExc from "./Components/TapNEarn/TapTokenExc";
import AdminRoute from "../src/Components/AdminRoute/AdminRoute";
import AdminDashboard from "../src/Components/Admin/AdminDashboard";
import Transactions from "./Components/Transaction/Transactions";
import DailyCheckIn from "./RewardSections/DailyCheckIn/DailyCheckIn";
import SpinWheel from "./RewardSections/SpinWheel/SpinWheel";
import LvlDashboard from "./RewardSections/LevelXP/pages/LvlDashboard";

const App = () => {
  const { isLoading } = useList();

  return (
    <>
      <ScrollToTop />
      {isLoading && <Loader />}

      <Routes>
        {/* public routes no login required */}
        <Route
          path="/"
          element={
            // <PublicOnlyRoute>
            <LandingPage />
            // </PublicOnlyRoute>
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

        {/* ADMIN ROUTE */}

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
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
          path="/daily-bonus"
          element={
            <ProtectedRoute>
              <DailyBonus />
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
          path="/redeem-history"
          element={
            <ProtectedRoute>
              <Transactions />
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
          path="taskOptionChecker"
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

        <Route
          path="/Referral"
          element={
            <ProtectedRoute>
              <Referral />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/invite-history"
          element={
            <ProtectedRoute>
              <ReferralHistory />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/watch-Ads"
          element={
            <ProtectedRoute>
              <WatchAd />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/tap-token"
          element={
            <ProtectedRoute>
              <TapTokenExc />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/daily-streak"
          element={
            <ProtectedRoute>
              <DailyCheckIn />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/spin-wheel"
          element={
            <ProtectedRoute>
              <SpinWheel />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/Lvl-Dashboard"
          element={
            <ProtectedRoute>
              <LvlDashboard />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default App;

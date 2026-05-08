import { useEffect, useMemo, useState } from "react";
import styles from "./LeaderboardPage.module.css";
import LeaderboardHero from "../components/LeaderboardHero";
import LeaderboardStats from "../components/LeaderboardStats";
import TopWinners from "../components/TopWinners";
import LeaderboardTable from "../components/LeaderboardTable";
import JoinLeaderboardCard from "../components/JoinLeaderboardCard";
import WeeklyRewardsCard from "../components/WeeklyRewardsCard";
import {
  getWeeklyLeaderboard,
  joinWeeklyLeaderboard,
} from "../../../services/leaderboardApi";
import CommonNavArr from "../../../Components/CommonComponents/CommonNavArr";
import { useList } from "../../../Context/ContextStore";
import { showError, showSuccess } from "../../../utils/Toast";

const LeaderboardPage = () => {
  const [loading, setLoading] = useState(true);
  const { isLoading, setIsLoading } = useList();
  const [joining, setJoining] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentUserRank, setCurrentUserRank] = useState(null);

  const participated = currentUserRank?.participated || 0;

  const [meta, setMeta] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 1,
  });

  const fetchLeaderboard = async (page = 1) => {
    try {
      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("accessToken") ||
        sessionStorage.getItem("token") ||
        sessionStorage.getItem("accessToken");

      if (!token) {
        showError("Please login first.");
        window.location.href = "/login";
        return;
      }

      setIsLoading(true);

      const response = await getWeeklyLeaderboard(page, 20);
      const payload = response?.data || response || {};
      console.log(payload);

      setLeaderboard(payload.data || []);
      setCurrentUserRank(payload.currentUserRank || null);

      setMeta({
        page: payload.page || 1,
        limit: payload.limit || 20,
        total: payload.total || 0,
        totalPages: payload.totalPages || 1,
      });
    } catch (error) {
      console.error("Failed to fetch leaderboard", error);

      if (error?.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("accessToken");
        showError("Session expired. Please login again.");
        window.location.href = "/login";
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard(1);
  }, []);

  const topThree = useMemo(() => leaderboard.slice(0, 3), [leaderboard]);

  const totalWeeklyCoins = useMemo(() => {
    return leaderboard.reduce(
      (sum, user) => sum + (user.weeklyCoinsEarned || 0),
      0,
    );
  }, [leaderboard]);

  const handleJoin = async () => {
    try {
      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("accessToken") ||
        sessionStorage.getItem("token") ||
        sessionStorage.getItem("accessToken");

      if (!token) {
        showError("Please login first.");
        showError("You Need to Login First");
        window.location.href = "/login";
        return;
      }

      setJoining(true);
      setIsLoading(true);
      await joinWeeklyLeaderboard();
      await fetchLeaderboard(1);
      showSuccess("Joined leaderboard successfully");
    } catch (error) {
      if (error?.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("accessToken");
        window.location.href = "/login";
        return;
      }
      showError(error?.response?.data?.message || "Failed to join leaderboard");
    } finally {
      setJoining(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={20} navigation={"/Home"} />
      <div className={styles.pageWrap}>
        <div className="container-fluid px-3 px-lg-4 pt-5 pb-4">
          <div className="container px-0 px-md-3">
            <LeaderboardHero
              currentUserRank={currentUserRank}
              participated={participated}
            />

            <div className="row g-4 mt-2">
              <div className="col-12 ">
                <div className="d-flex flex-column gap-4">
                  <LeaderboardStats
                    totalParticipants={meta.total}
                    totalWeeklyCoins={totalWeeklyCoins}
                    currentUserRank={currentUserRank}
                    participated={participated}
                  />
                </div>
              </div>

              <span className="mt-4 pt-2">
                {!participated ? (
                  <div className="col-12 ">
                    <div className="d-flex flex-column gap-4">
                      <JoinLeaderboardCard
                        joining={joining}
                        onJoin={handleJoin}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="col-12">
                    <TopWinners winners={topThree} />
                    <div className="mt-3">
                      <LeaderboardTable
                        rows={leaderboard}
                        page={meta.page}
                        totalPages={meta.totalPages}
                        onPageChange={fetchLeaderboard}
                        currentUserRank={currentUserRank}
                      />
                    </div>
                  </div>
                )}
              </span>

              {/* <WeeklyRewardsCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;

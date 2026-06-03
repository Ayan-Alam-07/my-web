import { useEffect, useState } from "react";
import { useList } from "../../../Context/ContextStore";
import styles from "./GiveawayBody.module.css";
import CommonNavArr from "../../CommonComponents/CommonNavArr";
import SecFooter from "../../CommonComponents/SecFooter";

export default function GiveawayBody() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState({ type: "idle", msg: "" });
  const [valChange, setValChange] = useState(false);
  const { isLoading, setIsLoading } = useList();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.trim()) {
      setStatus({ type: "error", msg: "Please enter a code." });
      return;
    }
    setIsLoading(true);
    setStatus({ type: "idle", msg: "" });

    // Simulated redeem — replace with your API call
    setTimeout(() => {
      setIsLoading(false);
      // Example logic: codes starting with "WIN" win
      if (code.trim().toUpperCase().startsWith("WIN")) {
        setStatus({
          type: "success",
          msg: "🎉 Congrats! Your reward has been credited.",
        });
        setCode("");
      } else {
        setStatus({
          type: "error",
          msg: "Invalid or already-used code. Try another.",
        });
        setCode("");
      }
    }, 900);
  };

  const handleOnChange = (e) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    if (code !== "") {
      return setValChange(true);
    } else {
      setValChange(false);
    }
  });

  return (
    <div className={styles.page}>
      <CommonNavArr id={3} navigation={"/Home"} />
      <section className={styles.wrapper}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.card}>
          <div className={styles.badge}>
            <span className={styles.dot} /> Live Giveaway
          </div>

          <h2 className={styles.title}>
            Enter Your Code.{" "}
            <span className={styles.gradient}>Win Instant Rewards.</span>
          </h2>
          <p className={styles.subtitle}>
            Redeem your secret code below and unlock cash, gift cards, and
            exclusive perks — delivered to your wallet within seconds.
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.form}>
              <input
                type="text"
                value={code}
                onChange={handleOnChange}
                placeholder="ENTER YOUR REWARD CODE"
                className={`${styles.input} ${valChange ? styles.inputvalue : ""}`}
                maxLength={16}
                minLength={14}
                spellCheck={false}
                autoComplete="off"
              />
              <button
                type="submit"
                className={`d-none d-md-inline-flex ${styles.button}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className={styles.spinner} />
                ) : (
                  <>
                    Claim Reward <span className={styles.arrow}>→</span>
                  </>
                )}
              </button>
            </div>
            <button
              type="submit"
              className={`d-md-none my-3 ${styles.button}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles.spinner} />
              ) : (
                <>
                  Claim Reward <span className={styles.arrow}>→</span>
                </>
              )}
            </button>
          </form>

          {status.msg && (
            <div
              className={`${styles.status} ${
                status.type === "success" ? styles.success : styles.error
              }`}
            >
              {status.msg}
            </div>
          )}

          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🔒</span>
              <div>
                <strong>Secure & Verified</strong>
                <p>256-bit encrypted redemption</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>⚡</span>
              <div>
                <strong>Instant Payout</strong>
                <p>Rewards in under 30 seconds</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>⭐</span>
              <div>
                <strong>4.9/5 Rated</strong>
                <p>Trusted by 250,000+ users</p>
              </div>
            </div>
          </div>

          <div className={styles.winners}>
            <span className={styles.pulse} />
            <p>
              <strong>Aarav S.</strong> just won <strong>₹500</strong> · 2 min
              ago
            </p>
          </div>
        </div>
      </section>
      <SecFooter
        mt={80}
        mb={10}
        name={"Watch AD"}
        link={"/help-center/earning/watch-ads"}
      />
    </div>
  );
}

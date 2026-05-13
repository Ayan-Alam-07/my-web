import TapEarnBannerAbsc from "./TapNEarnBannerAbsc";

const TapToken = () => {
  return (
    <TapEarnBannerAbsc
      hedding={"Swap Center"}
      para={"Exchange your Tap Token into exclusive rewards"}
      navigateTo={"/tap-token"}
      val={false}
    />
  );
};
export default TapToken;

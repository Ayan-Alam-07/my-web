import TapEarnBannerAbsc from "./TapNEarnBannerAbsc";

const TapToken = () => {
  return (
    <TapEarnBannerAbsc
      hedding={"Tap Token"}
      para={"Exchange your Tap Token into exclusive rewards"}
      navigateTo={"/tap-token"}
      val={false}
    />
  );
};
export default TapToken;

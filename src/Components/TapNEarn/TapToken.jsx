import TapEarnBannerAbsc from "./TapNEarnBannerAbsc";

const TapToken = () => {
  return (
    <TapEarnBannerAbsc
      hedding={"Tap Token"}
      para={"Exchange your Tap Token into rewards"}
      navigateTo={"/"}
      val={false}
    />
  );
};
export default TapToken;

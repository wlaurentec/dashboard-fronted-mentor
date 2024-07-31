import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";
import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo,
};

const networkColors = {
  Facebook: "bg-Facebook",
  Twitter: "bg-Twitter",
  Instagram: "bg-Instagram-Gradient",
  YouTube: "bg-YouTube",
}

const OverviewCard = ({ user, audienceType, audience, network, isUp, today }) => {
  return (
    <article className="bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center">
      <div className={`h-1 ${networkColors[network]} mb-8`}></div>
      <div className="flex items-center justify-center gap-2 mb-5">
        <img src={networkLogos[network]} alt="" />
        <p className="text-xs text-Dark-Grayish-Blue font-bold">{user}</p>
      </div>
      <p className="text-5xl font-bold mb-5 text-Very-Dark-Blue">{audience}</p>
      <p className="uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6">{audienceType}</p>
      <div className="flex items-center justify-center gap-1">
        <img src={isUp ? iconUp : iconDown} alt="" />
        <p className={`text-xs font-bold ${isUp ? "text-Lime-Green" : "text-Bright-Red"}`}>{today} Today</p>
      </div>
    </article>
  );
};

export default OverviewCard;

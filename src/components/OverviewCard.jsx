import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";
import youtubeLogo from "../assets/images/icon-youtube.svg";

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo,
};

const OverviewCard = ({ user, audienceType, audience, network }) => {
  return (
    <article className="bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] p-6 mx-auto">
      <div className="flex items-center justify-center">
        <img src={networkLogos[network]} alt="" />
        <p>{user}</p>
      </div>
      <p>{audience}</p>
      <p>{audienceType}</p>
    </article>
  );
};

export default OverviewCard;

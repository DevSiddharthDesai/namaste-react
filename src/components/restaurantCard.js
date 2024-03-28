import { Image_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { info } = resData;
  const { name, cuisines, avgRating, sla } = info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={Image_CDN_URL + info.cloudinaryImageId}
        height="150"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

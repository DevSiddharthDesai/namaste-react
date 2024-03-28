import RestaurantCard from "./restaurantCard";
import restaurantData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfThings, setListOfThings] = useState(restaurantData);

  const filterTopRated = () => {
    resData = listOfThings.filter((value) => value.info.avgRating > 4.4);
    setListOfThings(resData);
  };

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <button
        className="filter-btn"
        onClick={() => {
          filterTopRated();
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfThings.map((data) => {
          return <RestaurantCard key={data.info.id} resData={data} />;
        })}
      </div>
    </div>
  );
};

export default Body;

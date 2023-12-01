import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.styles.scss";

import cardImg from "../../assets/card-img.png";

const Card = ({ item }) => {
  const navigateTo = useNavigate();
  const backgroundImage = item.imageUrls[0];

  // Event Handler
  const handleClick = () => {
    navigateTo("/description", { state: { id: 1, imgUrl: "imgUrl" } });
  };

  return (
    <div className="card" onClick={handleClick}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="card-description">
        <div className="price">{item.price}</div>
        <div className="description">{item.description}</div>
        <div className="place">{item.address}</div>
        <div className="listing-date">20 November 2023</div>
        {/* <div className="card-footer">Footer</div> */}
      </div>
    </div>
  );
};

export default Card;

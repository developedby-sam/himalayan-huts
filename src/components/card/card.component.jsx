import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.styles.scss";

import cardImg from "../../assets/card-img.png";

const Card = ({ backgroundImage }) => {
  const navigateTo = useNavigate();
  const { imgUrl } = backgroundImage;

  // Event Handler
  const handleClick = () => {
    navigateTo("/description", { state: { id: 1, imgUrl: "imgUrl" } });
  };

  return (
    <div className="card" onClick={handleClick}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="card-description">
        <div className="price">Nrs. 25000</div>
        <div className="description">Appartement for rent.</div>
        <div className="place">Tahachal, Kathmandu, NP</div>
        <div className="listing-date">20 November 2023</div>
        <div className="card-footer">Footer</div>
      </div>
    </div>
  );
};

export default Card;

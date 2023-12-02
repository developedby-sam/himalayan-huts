import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.styles.scss";

function getRandomDate() {
  // Current date
  var today = new Date();

  // Generate a random year, month, and day
  var year = getRandomInt(2021, today.getFullYear());
  var month = getRandomInt(0, 11); // JavaScript months are 0-indexed
  var day = getRandomInt(1, 28); // Using 28 to avoid complications with February

  // Create a random date object
  var randomDate = new Date(year, month, day);

  // Format the date
  return formatDate(randomDate);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function formatDate(date) {
  var options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

const Card = ({ item }) => {
  const navigateTo = useNavigate();
  const backgroundImage = item.imageUrls[0];

  const date = getRandomDate();

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
        <div className="price">NRs. {item.price}</div>
        <div className="description">{item.description}</div>
        <div className="place">{item.address}</div>
        <div className="listing-date">{date}</div>
        {/* <div className="card-footer">Footer</div> */}
      </div>
    </div>
  );
};

export default Card;

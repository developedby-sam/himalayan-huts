import React, { useState, useEffect } from "react";
import "./homepage.styles.scss";
import searchBtn from "../../assets/search-btn.png";
import Listing from "../../components/listing/listing.component";

const Homepage = () => {
  const [rentalProperties, setRentalProperties] = useState([]);
  const [saleProperties, setSaleProperties] = useState([]);

  useEffect(() => {
    const fetchData = async (type) => {
      const limit = 4; // Set limit to 4
      try {
        const response = await fetch(
          `http://localhost:3000/api/listing/get?type=${type}&limit=${limit}`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData("rent").then((data) => {
      if (data) setRentalProperties(data);
    });

    fetchData("sale").then((data) => {
      if (data) setSaleProperties(data);
    });
  }, []);

  return (
    <div className="homepage">
      <section className="homepage__hero">
        <div className="homepage__hero-content">
          <h2 className="homepage__hero-content--headline">
            Renting made easier <br /> than ever before.
          </h2>
          <div className="homepage__hero-content--search-bar">
            <input className="input" type="text" />
            <img src={searchBtn} alt="" />
          </div>
        </div>
      </section>

      <section className="homepage__featured-rentals">
        <h2 className="section-title">Featured Rentals</h2>
        <Listing properties={rentalProperties} />
      </section>

      <section className="homepage__featured-sales">
        <h2 className="section-title">Featured Sales</h2>
        <Listing properties={saleProperties} />
      </section>
    </div>
  );
};

export default Homepage;

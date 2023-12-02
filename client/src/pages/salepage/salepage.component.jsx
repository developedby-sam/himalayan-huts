import "./salepage.styles.scss";
import React, { useState, useEffect } from "react";
import Listing from "../../components/listing/listing.component";

// import rentalProperties from "../../data";

const Salepage = () => {
  const [saleProperties, setSaleProperties] = useState([]);

  useEffect(() => {
    const fetchData = async (type) => {
      const limit = 20; // Set limit to 20
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

    fetchData("sale").then((data) => {
      if (data) setSaleProperties(data);
    });
  }, []);

  return (
    <div className="salepage">
      <section className="homepage__featured-rentals">
        <Listing properties={saleProperties} />
      </section>
    </div>
  );
};

export default Salepage;

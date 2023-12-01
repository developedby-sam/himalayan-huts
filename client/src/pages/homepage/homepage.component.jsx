import "./homepage.styles.scss";
import searchBtn from "../../assets/search-btn.png";
import Listing from "../../components/listing/listing.component";

import featuredSalesCardImg from "../../assets/card-img.png";
import featuredRentalCardImg from "../../assets/featured-img.png";

import rentalProperties from "../../data";

const Homepage = () => (
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
      <Listing properties={rentalProperties} />
    </section>
  </div>
);

export default Homepage;

import "./rentpage.styles.scss";
import Listing from "../../components/listing/listing.component";

import featuredRentalCardImg from "../../assets/featured-img.png";

import rentalProperties from "../../data";

const Rentpage = () => {
  return (
    <div className="rentpage">
      <section className="homepage__featured-rentals">
        <h2 className="section-title">Featured Rentals</h2>
        <Listing
          properties={rentalProperties}
          imageURL={featuredRentalCardImg}
        />
      </section>
    </div>
  );
};

export default Rentpage;

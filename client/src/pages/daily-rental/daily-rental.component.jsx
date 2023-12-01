import "./daily-rental.styles.scss";
import Listing from "../../components/listing/listing.component";

import rentalProperties from "../../data";

const DailyRental = () => {
  return (
    <div className="rentpage">
      <section className="homepage__featured-rentals">
        <h2 className="section-title">Daily Rentals</h2>
        <Listing properties={rentalProperties} />
      </section>
    </div>
  );
};

export default DailyRental;

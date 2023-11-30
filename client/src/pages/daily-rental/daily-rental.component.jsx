import "./daily-rental.styles.scss";
import Listing from "../../components/listing/listing.component";

import dailyRentalCardImg from "../../assets/daily-rental.png";

const DailyRental = () => {
  const listings = [1, 2, 3, 4, 5, 6];
  return (
    <div className="rentpage">
      <section className="homepage__featured-rentals">
        <h2 className="section-title">Daily Rentals</h2>
        {listings.map((listing) => (
          <Listing imgUrl={dailyRentalCardImg} />
        ))}
      </section>
    </div>
  );
};

export default DailyRental;

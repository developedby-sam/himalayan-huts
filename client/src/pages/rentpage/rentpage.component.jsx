import "./rentpage.styles.scss";
import Listing from "../../components/listing/listing.component";

import featuredRentalCardImg from "../../assets/featured-img.png";

const Rentpage = () => {
  const listings = [1, 2, 3, 4, 5, 6];
  return (
    <div className="rentpage">
      <section className="homepage__featured-rentals">
        <h2 className="section-title">Featured Rentals</h2>
        {listings.map((listing) => (
          <Listing imgUrl={featuredRentalCardImg} />
        ))}
      </section>
    </div>
  );
};

export default Rentpage;

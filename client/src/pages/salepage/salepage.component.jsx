import "./salepage.styles.scss";
import Listing from "../../components/listing/listing.component";

import featuredSalesCardImg from "../../assets/card-img.png";

const Salepage = () => {
  const listings = [1, 2, 3, 4, 5, 6];
  return (
    <div className="salepage">
      <section className="homepage__featured-rentals">
        <h2 className="section-title">Featured Sales</h2>
        {listings.map((listing) => (
          <Listing imgUrl={featuredSalesCardImg} />
        ))}
      </section>
    </div>
  );
};

export default Salepage;

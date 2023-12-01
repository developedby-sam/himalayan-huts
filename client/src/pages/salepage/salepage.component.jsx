import "./salepage.styles.scss";
import Listing from "../../components/listing/listing.component";

import rentalProperties from "../../data";

const Salepage = () => {
  return (
    <div className="salepage">
      <section className="homepage__featured-rentals">
        <Listing properties={rentalProperties} />
      </section>
    </div>
  );
};

export default Salepage;

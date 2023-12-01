import "./listing.styles.scss";

import Card from "../card/card.component";

const Listing = ({ properties }) => {
  return (
    <div className="directory">
      {properties.map((property) => (
        <Card key={property.title} item={property} />
      ))}
    </div>
  );
};

export default Listing;

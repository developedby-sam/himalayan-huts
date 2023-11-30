import React from "react";
import { useLocation } from "react-router-dom";

// Styles
import "./listing-description-page.styles.scss";
import cardImage from "../../assets/daily-rental.png";
import personImg from "../../assets/person.png";

const ListingDescriptionPage = (imgUrl) => {
  const location = useLocation();

  // Sample feature data
  const interiorFeatures = [
    "ADSL",
    "Alarm",
    "Balcony",
    "Barbecue",
    "Laundry room",
    "Wallpaper",
    "Dressing Room",
    "Video Intercom",
    "Shower",
    "Laminate",
    "Panel Door",
    "Blinds",
    "Sauna",
    "Satin Plaster",
    "Satin Color",
    "Ceramic Floor",
  ];

  const exteriorFeatures = [
    "Elevator",
    "Gardened",
    "Fitness",
    "Security",
    "Thermal Insulation",
    "Generator",
    "Tennis Court",
    "Car Park",
    "PVC",
    "Basketball Field",
    "Market",
  ];

  const generalInfo = {
    "Advertise No": "01234",
    "Published Date": "26 November 2020",
    "Advertise Status": "Sale",
    "Housing Shape": "Apartment",
    "Room + Living Number": " 3 + 1",
    "Gross / Net Meter Sqr.;": "150 Meter Sqr. / 135 Meter Sqr.",
    "Warming Type": "Natural Gas",
    "Building Age": "5",
    "Floor Location": "10",
    "Available for Loan": "Appropriate",
    Furnished: "Not",
    Dues: "NRs. 1200",
    Swap: "Not",
    Front: "Northwest",
    "Rental Income": "NRs. 15000",
  };

  const agent = {
    name: "Michael James",
    title: "Real Estate Specialist",
    phone: "+123 456 7890",
    email: "m.james@realestate.com",
    imageUrl: personImg, // Replace with actual path
  };

  return (
    <div className="propertyListingPage">
      <section className="propertyListingPage__propertyInfo">
        <div className="property-listing">
          <header className="listing-header">
            <div className="listing-title">
              <h1>2BHK Flat in Kathmandu</h1>
              <div className="listing-location">Kathmandu, Nepal</div>
            </div>
            <div className="listing-price">NRs. 29000</div>
          </header>

          <div
            className="image-gallery"
            style={{ backgroundImage: `url(${cardImage})` }}
          >
            Image Gallery
          </div>

          <section className="listing-details">
            <div className="general-info">
              <table className="info-table">
                {Object.entries(generalInfo).map(([key, value]) => (
                  <tr key={key}>
                    <td className="info-key">{key}</td>
                    <td className="info-value">{value}</td>
                  </tr>
                ))}
              </table>
            </div>
            <article className="explanation">
              <h2>Explanation</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eggestas as convallis tellus pellentesque non odio consectetur
                bibendum. Auctor leo risus in tristique et enim nec sed.
                Ridiculus vulputate facilisi a velit cursus sapien egestas nec,
                accumsan.
              </p>
            </article>
          </section>

          <section className="listing-features">
            <div className="features-inner">
              <div className="interior-features">
                <h2>Interior Features</h2>
                <ul className="features-list">
                  {interiorFeatures.map((feature) => (
                    <li key={feature} className="feature-item">
                      <span className="feature-checkmark">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exterior-features">
                <h2>Exterior Features</h2>
                <ul className="features-list">
                  {exteriorFeatures.map((feature) => (
                    <li key={feature} className="feature-item">
                      <span className="feature-checkmark">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="propertyListingPage__userInfo">
        <aside className="agent-info">
          <div className="agent-card">
            <img
              src={agent.imageUrl}
              alt={`${agent.name}`}
              className="agent-image"
            />
            <div className="agent-details">
              <div className="agent-name">{agent.name}</div>
              <div className="agent-title">{agent.title}</div>
              <div className="agent-contact-info">
                <button
                  className="agent-phone"
                  onClick={() => {
                    /* Handle phone click */
                  }}
                >
                  {agent.phone}
                </button>
                <button
                  className="agent-email"
                  onClick={() => {
                    /* Handle email click */
                  }}
                >
                  {agent.email}
                </button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default ListingDescriptionPage;

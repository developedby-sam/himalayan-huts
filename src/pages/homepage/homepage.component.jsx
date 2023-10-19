import "./homepage.styles.scss";
import searchBtn from "../../assets/search-btn.png";

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
    <section className="homepage__featured-rentals">FEATURED RENTALS</section>
    <section className="homepage__featured-sales">FEATURED SALES</section>
  </div>
);

export default Homepage;
import Navbar from "../nav/Navbar";
import "./Header.css";
const Header = () => (
  <header className="homeHeader">
    <Navbar />

    <div className="container header">
      <div className="headerTextDiv">
        <h1 className="headerText">
          Beautiful <br />
          homes made <br />
          for you
        </h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          aliquid est blanditiis impedit eos dignissimos tempora libero quas
        </p>
      </div>
      <div className="listingDiv">
        <a href="#listings">
          See all Listings <img src="./images/arrow.png" alt="" />
        </a>
      </div>
    </div>
  </header>
);
export default Header;

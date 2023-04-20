import Navbar from "../nav/Navbar";
import "./Header.css";
const Header = () => (
  <header id="displayHeader" className="displayHeader">
    <Navbar />

    <div class="container displayHeaderContainer">
      <div class="displayHeaderTextDiv">
        <h1 class="displayHeaderText">Modern House</h1>
        <p class="displayText">3002 Foster Ave, Brooklyn, NY 11210, USA</p>
      </div>
      <div class="displayHeaderTextDiv end">
        <h1 class="displayHeaderText">$450,000</h1>
        <p class="displayText">$2,800/sq ft</p>
      </div>
    </div>
  </header>
);

export default Header;

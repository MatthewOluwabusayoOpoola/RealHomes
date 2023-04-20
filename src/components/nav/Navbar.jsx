import { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div class="container">
        <nav>
          <a href="/" class="logo">
            <img src="./images/logo.png" />
            <img src="./images/logo2.png" alt="" />
          </a>
          <div>
            <ul id="nav__links" className={this.state.clicked ? "active" : ""}>
              <li>
                <a href="#">NavLink</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#listings">Listings</a>
              </li>
              <li>
                <a href="#">NavLink</a>
              </li>
              <li>
                <button class="navBtn">
                  Work With Us
                  <img
                    src="./images/arrowW.png"
                    alt=""
                    style={{ color: " #fff" }}
                  />
                </button>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

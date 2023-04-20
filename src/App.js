import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Component } from "react";
import Home from "./pages/Home";
import House from "./pages/House";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactChecked: false,
    };
  }
  contactToggle = () => {
    this.setState({
      contactChecked: !this.state.contactChecked,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/house" element={<House />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

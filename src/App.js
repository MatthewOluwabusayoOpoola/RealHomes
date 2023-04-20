import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import House from "./pages/House";

const App = () => {
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
};

export default App;

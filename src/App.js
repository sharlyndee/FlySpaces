import React, { Component } from "react";
import "./App.css";
import HomeSection from "./Pages/HomeSection/HomeSection";
import MapSection from "./Pages/MapSection/MapSection";
import FeaturedSpace from "./Pages/FeaturedSpace/FeaturedSpace";

class App extends Component {
  render() {
    return (
      <div>
        <HomeSection />
        <MapSection />
        <FeaturedSpace />
      </div>
    );
  }
}

export default App;

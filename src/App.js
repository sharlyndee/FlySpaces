import React, { Component } from "react";
import "./App.css";
import HomeSection from "./Pages/HomeSection/HomeSection";
import MapSection from "./Pages/MapSection/MapSection";
import FeaturedSpace from "./Pages/FeaturedSpace/FeaturedSpace";
import ContactSection from "./Pages/ContactSection";
import Workspace from "./Pages/WorkspaceSection";
import GuideSection from "./Pages/GuideSection";
import EmailSection from "./Pages/EmailSection";
import Footer from "./Pages/Footer";



class App extends Component {
  render() {
    return (
      <div>
        <HomeSection />
        <MapSection />
        <FeaturedSpace />
        <ContactSection />
        <Workspace />
        <GuideSection />
        <EmailSection />
        <Footer />
      </div>
    );
  }
}

export default App;

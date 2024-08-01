import React from "react";
import NavBar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyComponent() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default MyComponent;

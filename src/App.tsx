import { useState } from "react";
import "./App.css";
import Header from "./components/header.tsx";
import ImageSection from "./components/imagesSection";
import Creations from "./components/Creations";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <ImageSection />
      <Creations />
      <Footer />
    </>
  );
}

export default App;

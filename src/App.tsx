import "./App.css";
import Header from "./components/header.tsx";
import ImageSection from "./components/imagesSection";
import Creations from "./components/creations.tsx";
import Footer from "./components/footer";

function App() {
  return (
    <div id="subRoot">
      <Header />
      <ImageSection />
      <Creations />
      <Footer />
    </div>
  ); 
}

export default App;

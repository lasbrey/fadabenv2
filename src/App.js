import React from "react";
import Header from "./pages/header.jsx";
import HeroSection from "./pages/herosection.jsx";
import About from "./pages/about.jsx";
import Music from "./pages/music.jsx"
import Video from "./pages/video.jsx"
import Gallery from "./pages/gallery.jsx"
import Tours from "./pages/tours.jsx";
import Contact from "./pages/contact.jsx"
import Footer from "./pages/footer.jsx"

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <div className="xl:pl-20">
        <HeroSection />
        <About />
        <div className="bg-[url('https://pxdraft.com/themeforest/tailwind/nairo/assets/img/border.png')] pt-20 bg-repeat-x bg-center seperated"></div>
        <Music />
        <Video />
        <Gallery />
        <Tours />
        <Contact />
        <Footer />  
      </div>
    </div>
  );
}

export default App;

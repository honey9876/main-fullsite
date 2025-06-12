 



import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import WelcomeCard from "./pages/WelcomeCard";
import IntroSequence from "./pages/IntroSequence";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {showIntro ? (
        <IntroSequence onComplete={handleIntroComplete} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <HomePage />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

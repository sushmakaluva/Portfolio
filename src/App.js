import React from "react";
//import components
import Navbar from './components/Navbar.js';
import Intro from './pages/Intro.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';
import BackToTop from './components/back-top.js';
import Preloader from './components/preloader';
import Particles from "./components/Particles";


function App() {
    return (
        <React.Fragment>
            <Particles/>
            <Navbar />
            <Intro />
            <About />
            <Portfolio />
            <Contact />
            <BackToTop />
            <Preloader />
        </React.Fragment>
    );
}

export default App;
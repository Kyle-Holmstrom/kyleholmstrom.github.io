import React from 'react';
import Hero from "./Hero";
import Projects from './Projects';
import Footer from './Footer';
import AboutMe from './AboutMe';
import AnimatedIcon from './AnimatedIcon';

function App() {
    return(
    <>
        <AnimatedIcon />
        <Hero />
        <AboutMe />
        <Projects />
        <Footer />
    </>
    );
}

export default App;
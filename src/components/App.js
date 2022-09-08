import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import AboutMe from './AboutMe';
import AnimatedIcon from './AnimatedIcon';

function App() {
    return(
    <>
        <AnimatedIcon showIcon={false} />
        <Hero />
        <AboutMe />
        <Projects showProject={false} />
        <Footer />
    </>
    );
}
export default App;
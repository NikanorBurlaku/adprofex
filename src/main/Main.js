import React from 'react';
import Title from './Title/Title';
import About from './About/About';
import Contact from './Contact/Contact';
import Review from './Review/Review';
import Faq from './Faq/Faq';

function Main() {
    return (
        <main>
            <Title />
            <About />
            <Contact />
            <Review />
            <Faq />
        </main>
    );
}

export default Main;

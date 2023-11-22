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
            <a href='' className='main__button'>Сontact us today <img src="img/arrow.svg" alt=""></img></a>
        </main>
    );
}

export default Main;

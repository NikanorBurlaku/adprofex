import React from 'react';
import Slider from './CustomSlider';
import './Review.css';

function Review() {
    const slidesData = [
        {
            description: 'Adprofex Limited are real experts in their field! After the start of cooperation with this team we started  to receive 5 times more applications. We had tried to achieve growth on our own but it didn’t work out. Now we regret that we didn’t reach out to Adprofex Limited earlier. ',
            image: 'img/stars.svg',
            name: 'Billy Willyard',
        }, {
            description: `Thanks to the cooperation with Adprofex Limited we have increased sales. So now business income is stable and predictable. It's a new level for us.`,
            image: 'img/stars.svg',
            name: 'Vincent Raffaelli',
        }, {
            description: 'Until we started to work with Adprofex Limited it seemed to us that we had reached the maximum income potential. We had a lot of clients and it seemed that there couldn’t be more. Thanks to the team our business started to grow again, we got more clients and revenue doubled.',
            image: 'img/stars.svg',
            name: 'Yung Kim',
        }, {
            description: 'We’ve been working with Adprofex Limited for about 6 months and we can confidently say that we will continue our cooperation. We came for a result and got it. Business growth doubled and the company gained confidence in its great future.',
            image: 'img/stars.svg',
            name: 'Ravi Yancoskie',
        }, {
            description: 'I recommend Adprofex Limited to the companies, who need quality leads. The team exactly knows what to do and is responsible for the results.',
            image: 'img/stars.svg',
            name: 'Joe Cuce',
        }, {
            description: 'We have started to work with Adprofex Limited quite recently but already can draw conclusions. From the very first day the team got down to business seriously and we started to receive a lot of  applications. Now we get a steady stream of leads and our income is growing.',
            image: 'img/stars.svg',
            name: 'Marianne Sweetser',
        },
    ];


    return (
        <div className='wrapper review' id='review'>
            <h2 className='second__title'>Reviews</h2>
            <Slider slides={slidesData} />
        </div>
    );
}

export default Review;

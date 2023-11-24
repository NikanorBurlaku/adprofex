import React from 'react';
import './About.css';

function About() {


    return (
        <div className='wrapper about' id='about'>
            <div className='about__title'>
                <h2 className='second__title'>Scale Your Business With Our Proven Lead Generation Services</h2>
                <p>Your leads are our concern.</p>
                <div className='about__container'>
                    <div className='about__block about_grid1'>
                        <p className='about__block--title'><span>01</span><br />
                            B2B Lead Generation</p>
                        <p className='about__block--descr'>We quarantee a steady stream of quality leads to keep your sales team busy!</p>
                    </div>
                    <div className='about__block about_grid2'>
                        <p className='about__block--title'><span>02</span><br />
                            Cost-Effective Marketing</p>
                        <p className='about__block--descr'>You might think that lead generation is a costly thing, but social media marketing requires larger budgets, like Facebook Ads or Pinterest Ads. With lead generation, you will have a cost-effective marketing campaign that really works.</p>
                    </div>
                    <div className='about__block about_grid3'>
                        <p className='about__block--title'><span>03</span><br />
                            Appointment Setting</p>
                        <p className='about__block--descr'>Our appointment setters will schedule calls with qualified key decision makers in your target market.</p>
                    </div>
                    <div className='about__block about_grid4'>
                        <p className='about__block--title'><span>04</span><br />
                            Focus On Other Things</p>
                        <p className='about__block--descr'>Our B2B lead generation agency helps to optimize the sales process and reduce the time spent on nurturing leads, while you free up your time for other things.</p>
                    </div>
                    <div className='about__block about_grid5'>
                        <p className='about__block--title'><span>05</span><br />
                            Lead Gen Outsourcing</p>
                        <p className='about__block--descr'>We will work together with your sales team and take away the entire scope of lead generation tasks so they can focus on conversions.</p>
                    </div>
                    <div className='about__block about_grid6'>
                        <p className='about__block--title'><span>06</span><br />
                            Targeted Market Reach</p>
                        <p className='about__block--descr'>Adprofex Limited lead generation agency helps businesses to engage and target only relevant audience, quarantiing that efforts will not be wasted.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

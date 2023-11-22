import React, { useState } from 'react';
import './Faq.css';

function Faq() {
    const [showDescriptions, setShowDescriptions] = useState(Array(6).fill(false)); // Создаем массив из 7 значений false (по умолчанию все описания скрыты)

    const toggleDescription = (index) => {
        const newDescriptions = showDescriptions.map((_, i) => (i === index ? !showDescriptions[i] : false));
        setShowDescriptions(newDescriptions);
    };

    return (
        <div className='wrapper faq'>
            <h2 className='second__title'>FAQ</h2>
            <div className='faq__container'>
                <div className='faq__item' onClick={() => toggleDescription(0)}>
                    <div className='faq__title-top'>
                        <p className='faq__title'>What Is Lead Generation?</p>
                        <img className={`faq__close ${showDescriptions[0] ? 'rotate' : ''}`} alt='' src='img/close-faq.svg' />
                    </div>
                    <div className={`faq__descr-block ${showDescriptions[0] ? 'show' : ''}`}>
                        <p className='faq__descr'>Lead generation involves various marketing strategies to help you attract customers to your services or product. Lead generation may include services like enhancing your network, creating engaging online content or profile optimisation.</p>
                    </div>
                </div>

                <div className='faq__item' onClick={() => toggleDescription(1)}>
                    <div className='faq__title-top'>
                        <p className='faq__title'>Why Is Lead Generation so Crucial?</p>
                        <img className={`faq__close ${showDescriptions[1] ? 'rotate' : ''}`} alt='' src='img/close-faq.svg' />
                    </div>
                    <div className={`faq__descr-block ${showDescriptions[1] ? 'show' : ''}`}>
                        <p className='faq__descr'>Attracting new customers is one of the most important aspects of any business. By constant generating new viable cold and warm leads you can always be sure about tomorrow and achieve your business goals. Lead generation also attracts high volumes of traffic therefore increasing your rankings as well.</p>
                    </div>
                </div>
                <div className='faq__item' onClick={() => toggleDescription(2)}>
                    <div className='faq__title-top'>
                        <p className='faq__title'>What Are Lead Generation Companies?</p>
                        <img className={`faq__close ${showDescriptions[2] ? 'rotate' : ''}`} alt='' src='img/close-faq.svg' />
                    </div>
                    <div className={`faq__descr-block ${showDescriptions[2] ? 'show' : ''}`}>
                        <p className='faq__descr'>Lead generation companies focus on providing different services to other businesses, booking appointments, and bringing in leads. These companies are experts in knowing how to target your ideal customers. They may provide cold email services, cold calling or other lead-generation methods.</p>
                    </div>
                </div>
                <div className='faq__item' onClick={() => toggleDescription(3)}>
                    <div className='faq__title-top'>
                        <p className='faq__title'>What are The Benefits of Outsourcing Lead Generation?</p>
                        <img className={`faq__close ${showDescriptions[3] ? 'rotate' : ''}`} alt='' src='img/close-faq.svg' />
                    </div>
                    <div className={`faq__descr-block ${showDescriptions[3] ? 'show' : ''}`}>
                        <p className='faq__descr'>It takes tremendous efforts and time to research and generate quality leads. To save your time and resources spent on converting leads, outsource your lead generation to us. We will take on all the time-consuming duties and provide your sales team an opportunity to increase your revenue.</p>
                    </div>
                </div>
                <div className='faq__item' onClick={() => toggleDescription(4)}>
                    <div className='faq__title-top'>
                        <p className='faq__title'>What Is A Lead Generation Process?</p>
                        <img className={`faq__close ${showDescriptions[4] ? 'rotate' : ''}`} alt='' src='img/close-faq.svg' />
                    </div>
                    <div className={`faq__descr-block ${showDescriptions[4] ? 'show' : ''}`}>
                        <p className='faq__descr'>This is the process which is used to attract potential customers to your website so they can engage in purchase. The process usually includes engaging the customers and directing them to take actions that will convince them of the benefits and uniqueness of your offer.</p>
                    </div>
                </div>
                <div className='faq__item' onClick={() => toggleDescription(5)}>
                    <div className='faq__title-top'>
                        <p className='faq__title'>What’s the price of lead generation services?</p>
                        <img className={`faq__close ${showDescriptions[5] ? 'rotate' : ''}`} alt='' src='img/close-faq.svg' />
                    </div>
                    <div className={`faq__descr-block ${showDescriptions[5] ? 'show' : ''}`}>
                        <p className='faq__descr'>Lead generation services vary in costs. It depends on the style outreach is done, the time investment and the company itself. We encourage you to book a call with one of our managers to discuss and find out what is the best solution for you.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;

import React, { useState } from 'react';
import './Contact.css';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        agreeToTerms: true,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.agreeToTerms) {
            setSubmitted(true);

            // Отправка данных на сервер
            // fetch('http://localhost:3001/submitForm', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // })
            //     .then((response) => response.json())
            //     .then((data) => {
            //         console.log(data);
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     });
        };
    }
    const handleInputChange = (e) => {

        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    const handleAgreeChange = (e) => {


        setFormData((prevFormData) => ({
            ...prevFormData,
            agreeToTerms: !(prevFormData.agreeToTerms),
        }));
    }

    const closeThanks = () => {
        setSubmitted(false);
      };

    return (
        <>
            <div className='contact'>
                <div className='wrapper'>
                    <div className='contact__title'>
                        <h2 className='second__title'>Contact us </h2>
                        <div className='contact__images'>
                            <img className='contact__img' src='img/contact.svg' alt='' />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="contact__form">
                        <div className='contant__inputs'>
                            <input className='contact__input' placeholder='Name' name="name" value={formData.name} onChange={handleInputChange} required />
                            <input className='contact__input' placeholder='Email' name="email" value={formData.email} onChange={handleInputChange} required />
                            <textarea className='contact__textarea' placeholder='Your message' value={formData.message} onChange={handleInputChange} name='message' noresize="true"></textarea>
                        </div>
                        <div className="form__bottom">
                            <label className="form__checkbox">
                                <span name="agreeToTerms" onClick={handleAgreeChange}
                                    className={(formData.agreeToTerms) ? 'form__checkbox-span active' : 'form__checkbox-span'}>
                                    <img src="img/contact-cross.svg" alt="" />
                                </span>
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <p>
                                    I give my consent to the processing of personal data in accordance with the full text of the
                                    <a href="agreement.pdf">Privacy Policy</a>
                                </p>
                            </label>
                            <button type="submit" className={(formData.agreeToTerms) ? 'contact__form-button active' : 'contact__form-button'} disabled={!formData.agreeToTerms}> Сontact us <img src='img/arrow.svg' alt='' /></button>
                        </div>
                    </form>
                </div >
            </div >
            {submitted && (
                <div className="thanks active" onClick={closeThanks}>
                    <div className="thanks__container">
                        <img src="img/thanks-line.svg" alt=""></img>
                        <p className="thanks__title">Thank you!</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Contact;

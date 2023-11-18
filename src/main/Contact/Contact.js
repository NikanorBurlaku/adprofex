import React, { useState } from 'react';
import './Contact.css';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        agreeToTerms: true,
    });
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


    return (
        <div className='contact'>
            <div className='wrapper'>
                <div className='contact__title'>
                    <h2 className='second__title'>Contact us </h2>
                    <div className='contact__images'>
                        <img className='contact__img' src='img/contact.svg' alt='' />
                    </div>
                </div>

                <form className="contact__form">
                    <div className='contant__inputs'>
                        <input className='contact__input' placeholder='Name' name="name" value={formData.name} onChange={handleInputChange} required />
                        <input className='contact__input' placeholder='Email' name="email" value={formData.email} onChange={handleInputChange} required />
                        <textarea className='contact__textarea' placeholder='Your message' value={formData.message} onChange={handleInputChange} name='idea' noresize="true"></textarea>
                    </div>
                    <div className="form__bottom">
                        <label className="form__checkbox">
                            <span name="agreeToTerms" onClick={handleAgreeChange}
                                className={(formData.agreeToTerms) ? 'feedback__form-span active' : 'feedback__form-span'}>
                                <img src="img/contact-cross.svg" alt="" />
                            </span>
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <p>
                                I give my consent to the processing of personal data in accordance with the full text of the
                                <a href="agreement.pdf">Privacy Policy</a>
                            </p>
                        </label>
                        <button type="submit" className="contact__form-button active">Сontact us <img src='img/arrow.svg' alt='' /></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;

import React from 'react'

export default function ContactsComp() {
    return (
        <div className="contacts__main">
            <div className='contacts'>
                <form className='contacts-form'>
                    <div className="contacts-form__header">
                        <h1 className='title'>Contact <span className='title-span'>Form</span></h1>
                        <p>Feel free to contact us through Twitter or Facebook if you prefer.</p>
                    </div>
                    <div className="contacts-form__section">
                        <input type="text" placeholder='Your Name*' />
                        <input type="email" placeholder='Your Email*' />
                        <input type="tel" placeholder='Phone Number*' />
                    </div>
                    <div className="contacts-form__section">
                        <input type="text" placeholder='Company Name*' />
                        <input type="text" placeholder='Subject' />
                    </div>
                    <div className="contacts-form__section">
                        <textarea placeholder='Message*'></textarea>
                    </div>
                    <div className="contacts-form__section">
                        <button type='submit' className='button'>SEND NOW!</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
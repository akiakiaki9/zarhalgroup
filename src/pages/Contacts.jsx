import React from 'react'
import Navbar from '../components/Navbar'
import Shapka from '../components/Shapka'
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import ContactsComp from '../components/ContactsComp';
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import Footer from '../components/Footer';

export default function Contacts() {
    return (
        <div>
            <Shapka />
            <Navbar />
            <div className='pagename'>
                <div className="pagename-blok">
                    <div>
                        <h1>Contact Us</h1>
                    </div>
                    <div>
                        <Link to='/'><p className='pagename-blok__p-1'>Home</p></Link>
                        <GoDotFill className='pagename-icon' />
                        <p className='pagename-blok__p-2'>Contact Us</p>
                    </div>
                </div>
            </div>
            <ContactsComp />
            <div className='contacts2'>
                <div className="main">
                    <div className="contacts2-blok">
                        <div className="contacts2-blok__section">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2483.564195626061!2d-0.12157432353033716!3d51.50286442181221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slondon%20eye!5e0!3m2!1sru!2s!4v1740967948416!5m2!1sru!2s"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="contacts2-blok__section">
                            <p className='subtitle'>CONTACT US</p>
                            <h1 className='title'>Get In <span className='title-span'>Touch</span></h1>
                            <p className='paragraph'>Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="contacts2-blok__section__container">
                                <div className="contacts2-blok__section__container-part">
                                    <h2>Head Office</h2>
                                    <div className='contacts2-hr'></div>
                                    <div className="contacts2-blok__section__container-part__section">
                                        <div className="contacts2-blok__section__container-part__section__div">
                                            <FaLocationDot className='contacts2-blok__section__container-part__section__div__icon' />
                                            <div>
                                                <p className='contacts2-blok__section__container-part__section__div__p-1'>
                                                    Address
                                                </p>
                                                <p className='contacts2-blok__section__container-part__section__div__p-2'>
                                                    123 King Street, Melbourne
                                                </p>
                                                <p className='contacts2-blok__section__container-part__section__div__p-2'>
                                                    Victoria 5000, New York.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="contacts2-blok__section__container-part__section__div">
                                            <HiOutlineMail className='contacts2-blok__section__container-part__section__div__icon' />
                                            <div>
                                                <p className='contacts2-blok__section__container-part__section__div__p-1'>
                                                    Call Us / Email
                                                </p>
                                                <p className='contacts2-blok__section__container-part__section__div__p-2'>
                                                    +1800-200-123456
                                                </p>
                                                <p className='contacts2-blok__section__container-part__section__div__p-2'>
                                                    fablio.support@yourmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contacts2-blok__section__container-part">
                                    <h2>Branch Office</h2>
                                    <div className='contacts2-hr'></div>
                                    <div className="contacts2-blok__section__container-part__section">
                                        <div className="contacts2-blok__section__container-part__section__div">
                                            <FaLocationDot className='contacts2-blok__section__container-part__section__div__icon' />
                                            <div>
                                                <p className='contacts2-blok__section__container-part__section__div__p-1'>
                                                    Address
                                                </p>
                                                <p className='contacts2-blok__section__container-part__section__div__p-2'>
                                                    123 King Street, Melbourne
                                                </p>
                                                <p className='contacts2-blok__section__container-part__section__div__p-2'>
                                                    Victoria 5000, New York.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="contacts2-blok__section__container-part__section__div">
                                            <HiOutlineMail className='contacts2-blok__section__container-part__section__div__icon' />
                                            <div>
                                                <p className='contacts2-blok__section__container-part__section__div__p-1'>
                                                    Call Us / Email
                                                </p>
                                                <p className='contacts2-blok__section__container-part__section__div__p-2'>
                                                    +1800-200-123456
                                                </p>
                                                <p className='contacts2-blok__section__container-part__section__div__p-2'>
                                                    fablio.support@yourmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};
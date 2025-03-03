import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

export default function Footer() {
    return (
        <div className='footer'>
            <div className="main">
                <div className="footer-header">
                    <div className="footer-header__section">
                        <Link to='/'><img src="/images/logo.svg" alt="" /></Link>
                        <div></div>
                        <p>Fablio is operating in the textile market, as the manufacture and trader. As years go by the range of produced
                            textiles products has increased.
                        </p>
                    </div>
                </div>
                <div className="footer-blok">
                    <div className="footer-blok__section">
                        <h2 className='footer-blok__section__h2-1'>Get Free Estimate</h2>
                        <div className='footer-blok__section-line'></div>
                        <h2 className='footer-blok__section__h2-2'><a href="tel:12345678910">123-456-78910</a></h2>
                        <p>Our online scheduling and payment system is safe.</p>
                        <Link to='/contacts'><button>REQUEST ONLINE FORM</button></Link>
                    </div>
                    <div className="footer-blok__section">
                        <h2 className='footer-blok__section__h2-1'>Partners</h2>
                        <br />
                        <a className='footer-blok__section-a' href="">Zarhal Group</a>
                        <div className='footer-blok__section-line'></div>
                        <a className='footer-blok__section-a' href="">Langheinrich</a>
                        <div className='footer-blok__section-line'></div>
                        <a className='footer-blok__section-a' href="">Curt Bauer</a>
                        <div className='footer-blok__section-line'></div>
                    </div>
                    <div className="footer-blok__section">
                        <h2 className='footer-blok__section__h2-1'>Contact Us</h2>
                        <div className='footer-blok__section-line'></div>
                        <div className="footer-blok__section__container">
                            <div className="footer-blok__section__container-part">
                                <FaLocationDot className='footer-blok__section__container-part__icon' />
                                <p>4789 Melmorn Street,Zakila Ton Mashintron Town</p>
                            </div>
                            <div className="footer-blok__section__container-part">
                                <FaPhone className='footer-blok__section__container-part__icon' />
                                <a href="tel:(+01) 123 456 7890">(+01) 123 456 7890</a>
                            </div>
                            <div className="footer-blok__section__container-part">
                                <IoMailSharp className='footer-blok__section__container-part__icon' />
                                <a href="mailto:info@example.com">info@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-footer">
                    <p>Copyright © 2025 Zarhal Group. All rights reserved. Powered by <a href="https://akbarsoft.uz">Akbar Soft</a></p>
                </div>
            </div>
        </div>
    )
};
import React from 'react'
import { Link } from 'react-router-dom'

export default function Shapka() {
    return (
        <div className='shapka'>
            <div className="main">
                <div className="shapka-blok">
                    <div className="shapka-blok__section">
                        <Link to='/'>
                            <img src="/images/logo.svg" alt="Zarhal Logo" />
                        </Link>
                    </div>
                    <div className="shapka-blok__section">
                        <div className="shapka-blok__section-part shapka-blok__section-part__invisible">
                            <img src="/images/shapka/shapka-1.png" alt="" />
                            <div>
                                <p className='shapka-blok__section-part__p-1'>Send Email</p>
                                <p className='shapka-blok__section-part__p-2'>info@example.com</p>
                            </div>
                            <div className="shapka-blok__section-part__drop"></div>
                        </div>
                        <div className="shapka-blok__section-part shapka-blok__section-part__invisible">
                            <img src="/images/shapka/shapka-2.png" alt="" />
                            <div>
                                <p className='shapka-blok__section-part__p-1'>Working Hours</p>
                                <p className='shapka-blok__section-part__p-2'>Mon-Sat 09:00 am to 07:00 pm</p>
                            </div>
                            <div className="shapka-blok__section-part__drop"></div>
                        </div>
                        <div className="shapka-blok__section-part">
                            <img src="/images/shapka/shapka-3.png" alt="" />
                            <div>
                                <p className='shapka-blok__section-part__p-1'>Have any Questions?</p>
                                <p className='shapka-blok__section-part__p-2'>+123 795 9841</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
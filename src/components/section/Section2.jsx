import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { Link } from 'react-router-dom';

export default function Section2() {
    return (
        <div className='section2'>
            <div className="main">
                <div className="section2-blok">
                    <div className="section2-blok__section">
                        <img src="/images/section2/section2.png" alt="" />
                    </div>
                    <div className="section2-blok__section">
                        <p className='subtitle'>WHO WE ARE</p>
                        <h1 className='title'>An Ultimate Textile Brand in <span className='title-span'>Market Since 1970</span></h1>
                        <p className='paragraph'>Indian weavers of designer of furnishing fabrics is a textile manufacturer founded in 1970 and renowned
                            for new and stylish interpretations of natural & organic fabrics. All of our fabrics are designed and woven.
                        </p>
                        <div className="section2-blok__section__container">
                            <div className="section2-blok__section__container-part">
                                <div>
                                    <GiCheckMark className='section2-blok__section__container-part__div__icon' />
                                    <p>Trends the Current Market</p>
                                </div>
                                <div>
                                    <GiCheckMark className='section2-blok__section__container-part__div__icon' />
                                    <p>The rayon fabrics wholesaler</p>
                                </div>
                                <div>
                                    <GiCheckMark className='section2-blok__section__container-part__div__icon' />
                                    <p>The Global fabrics distributor</p>
                                </div>
                            </div>
                            <div className="section2-blok__section__container-part">
                                <div>
                                    <GiCheckMark className='section2-blok__section__container-part__div__icon' />
                                    <p>Biological tested fabrics</p>
                                </div>
                                <div>
                                    <GiCheckMark className='section2-blok__section__container-part__div__icon' />
                                    <p>Awarded For Best Exporter</p>
                                </div>
                                <div>
                                    <GiCheckMark className='section2-blok__section__container-part__div__icon' />
                                    <p>Stable partner global textile</p>
                                </div>
                            </div>
                        </div>
                        <div className="section2-blok__section__footer">
                            <Link to='/'><button className='button'>VIEW MORE!</button></Link>
                            <Link to='/'><button className='section2-blok__section__footer-button'>CONTACT US</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
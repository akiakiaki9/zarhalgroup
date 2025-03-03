import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Section() {
    return (
        <div className='section'>
            <div className="section__main">
                <div className="section-blok">
                    <div className="section-blok__section">
                        <img src="/images/section/section-1.png" alt="" />
                        <h2>We Design Fabric</h2>
                        <p>We classified it on the basis of material, design and by craft.</p>
                        <Link to='/'>
                            READ MORE <FaLongArrowAltRight className='section-blok__section__icon' />
                        </Link>
                    </div>
                    <div className="section-blok__section">
                        <img src="/images/section/section-2.png" alt="" />
                        <h2>We Manufacture</h2>
                        <p>With its rapid growth over the last four decades, since 1970</p>
                        <Link to='/'>
                            READ MORE <FaLongArrowAltRight className='section-blok__section__icon' />
                        </Link>
                    </div>
                    <div className="section-blok__section">
                        <img src="/images/section/section-3.png" alt="" />
                        <h2>We Export Globally</h2>
                        <p>Fablio is a leading export textile service providers globally.</p>
                        <Link to='/'>
                            READ MORE <FaLongArrowAltRight className='section-blok__section__icon' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
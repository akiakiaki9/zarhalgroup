import React from 'react'

export default function Section5() {
    return (
        <div className='section5'>
            <div className="section5-blok">
                <div className="section5-blok__section section5-blok__section-1">
                    <p className='section5-blok__section-p-1'>WELL DESIGNED</p>
                    <h1>We Provide Clothes More Than <span>Just Stitched Fabric</span></h1>
                    <p className='section5-blok__section-p-2'>Fablio is the largest peer-to-peer comparison initiative in the textile
                        industry. It tracks the apparel material and home textile sector’s progress toward more sustainable materials
                        sourcing, as well as alignment with global effort. Besides the regular production became the largest exporter.
                    </p>
                    <div className='section5-hr'></div>
                    <div className="section5-blok__section__container">
                        <div className="section5-blok__section__container-part">
                            <div>
                                <img src="/images/section5/section5-1.png" alt="" />
                            </div>
                            <div>
                                <p className='section5-blok__section__container-part__p-1'>25 +</p>
                                <p className='section5-blok__section__container-part__p-2'>Win Awards</p>
                            </div>
                        </div>
                        <div className="section5-blok__section__container-part">
                            <div>
                                <img src="/images/section5/section5-2.png" alt="" />
                            </div>
                            <div>
                                <p className='section5-blok__section__container-part__p-1'>80 +</p>
                                <p className='section5-blok__section__container-part__p-2'>Equipment</p>
                            </div>
                        </div>
                        <div className="section5-blok__section__container-part">
                        <div>
                                <img src="/images/section5/section5-3.png" alt="" />
                            </div>
                            <div>
                                <p className='section5-blok__section__container-part__p-1'>30 +</p>
                                <p className='section5-blok__section__container-part__p-2'>Total Years</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section5-blok__section section5-blok__section-2">
                    <img className='section5-blok__section-img' src="/images/section5/section5-bg.jpg" alt="" />
                </div>
            </div>
        </div>
    )
};
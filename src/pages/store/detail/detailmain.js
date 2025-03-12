import React from 'react'
import DetailComp from './DetailComp'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Shapka from '../../../components/Shapka'

export default function DetailMain() {
    return (
        <div>
            <Shapka />
            <Navbar />
            <DetailComp />
            <Footer />
        </div>
    )
};
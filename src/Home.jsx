import React from 'react'
import Shapka from './components/Shapka'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Section from './components/section/Section'
import Section2 from './components/section/Section2'
import Section3 from './components/section/Section3'
import Section4 from './components/section/Section4'
import Section5 from './components/section/Section5'
import Section6 from './components/section/Section6'
import Footer from './components/Footer'

export default function Home() {
    return (
        <div>
            <Shapka />
            <Navbar />
            <Header />
            <Section />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
            
        </div>
    )
};
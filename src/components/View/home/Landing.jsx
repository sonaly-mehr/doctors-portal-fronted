'use client'
import React from 'react';
import Hero from './Hero';
import Services from './Services';
import DentalCare from './DentalCare';
import MakeAppointment from './MakeAppointment';
import ContactUs from './ContactUs';
import Testimonials from './Testimonials';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing = () => {
    AOS.init();
    return (
        <div>
            <Hero/>
            <Services/>
            <DentalCare/>
            <MakeAppointment/>
            <Testimonials/>
            <ContactUs/>
        </div>
    );
};

export default Landing;
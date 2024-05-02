import React from 'react';
import styles from '../../app/styles/index.module.css'

const Footer = () => {
    const footerContent = [
        {
            heading: "SERVICES",
            content: ["Emergency Checkup", "Monthly Checkup", "Weekly Checkup", "Deep Checkup"]
        },
        {
            heading: "ORAL HEALTH",
            content: ["Fluoride Treatment", "Cavity Filling", "Teath Whitening"]
        },
        {
            heading: "OUR ADDRESS",
            content: ["New York - 101010 Hudson"]
        }
    ]
    return (
        <div className={`${styles.footer__bg} pt-12 lg:pt-16`}>
            <div className='w-[90%] m-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-0 pb-28'>
                {
                    footerContent?.map((content, index)=> (
                        <div key={index}>
                            <h6 className='font-bold text-base lg:text-lg text-[#939393] mb-4'>{content?.heading}</h6>
                            <ul className='flex flex-col gap-2'>
                            {content?.content?.map((link, index)=> (
                                <li key={index} className='text-sm lg:text-base'>{link}</li>
                            ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
            <p className='text-center pb-10'>Copyright 2022 All Rights Reserved</p>
        </div>
    );
};

export default Footer;
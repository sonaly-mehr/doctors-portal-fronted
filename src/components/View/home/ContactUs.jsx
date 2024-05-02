import React from 'react';
import styles from '../../../app/styles/index.module.css'
import Button from '@/components/Ui/Button';

const ContactUs = () => {
    return (
        <div className={`${styles.contact__bg} py-14 lg:py-16 `}>
            <div className='w-[90%] lg:w-[30%] m-auto'>
                <div className='text-center'>
                <h6 className='subHeading'>Contact Us</h6>
                <p className='text-white text-4xl capitalize my-2'>Stay connected with us</p>
                </div>
                <form action="" className='flex flex-col gap-4 mt-10'>
                    <input type="email" placeholder='Email Address' className='input px-3 py-2 rounded-lg'/>
                    <input type="text" placeholder='Subject' className='input px-3 py-2 rounded-lg'/>
                    <textarea placeholder='Your message' className='input mb-5 px-3 py-2 rounded-lg' rows={5}/>

                    <Button text="Submit" type="submit" px="4" py="3"/>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
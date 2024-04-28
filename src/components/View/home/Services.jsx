import React from 'react';
import fluoride from '../../../assets/fluoride 1.png'
import cavity from '../../../assets/cavity 1.png'
import whitening from '../../../assets/whitening 1.png'
import Image from 'next/image';
import styles from '../../../app/styles/index.module.css'

const Services = () => {
    const services = [
        {
            icon: fluoride,
            name: "Fluoride Treatment",
            descp: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            icon: cavity,
            name: "Cavity Filling",
            descp: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            icon: whitening,
            name: "Teeth Whitening",
            descp: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='px-4 text-center my-32'>
            <h6 className='subHeading'>OUR SERVICES</h6>
            <p className='introHeading'>Services We Provide</p>
            <div className='flex gap-6 mt-16'>
                {
                   services.map((service, index)=> (
                    <div key={index} className={`${styles.box__shaddow} bg-white p-8 rounded-lg hover:scale-[1.05] transition-all duration-100 cursor-pointer`}>
                        <div className='flex justify-center mb-6'>
                        <Image src={service?.icon} alt=''className='' unoptimized = {true}/>
                        </div>
                        <div className='my-3 flex flex-col gap-3'>
                            <h6 className='font-semibold text-xl text-secondary'>{service?.name}</h6>
                            <p className='text-base'>{service?.descp}</p>
                        </div>
                    </div>
                   )) 
                }
            </div>
        </div>
    );
};

export default Services;
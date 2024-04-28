import Link from 'next/link';
import React from 'react';

const ServiceSlots = ({services}) => {
    return (
        <div className="flex gap-6 flex-wrap">
          {services?.data?.availableServices?.map((slot, index) => (
            <Link
              href="/"
              key={index}
              className={`${styles.services__shaddow} text-center font-semibold text-xl text-green basis-[32%] py-10 bg-white rounded-xl`}
            >
              {slot?.name}
            </Link>
          ))}
        </div>
    );
};

export default ServiceSlots;
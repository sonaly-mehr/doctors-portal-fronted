import React from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/AuthOptions';
import Header from '@/components/Ui/Header';
import { getServerSession } from 'next-auth';


const PublicHeader = async() => {
    const navLinks = [
        { key: "1", label: "Home", href: "/" },
        { key: "2", label: "Appointment", href: "/appointment" },
        { key: "3", label: "Doctors", href: "/available-doctors" },
        { key: "4", label: "About Us", href: "/about-us" },
        { key: "5", label: "Contact Us", href: "/contact-us" },
      ];
      const session = await getServerSession(authOptions);
    return (
        <div>
            <Header navLinks={navLinks} session={session?.accessToken ? true : false}/>
        </div>
    );
};

export default PublicHeader;
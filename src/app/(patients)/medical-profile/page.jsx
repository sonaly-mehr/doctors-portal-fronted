import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/AuthOptions';
import MedicalProfile from '@/components/Ui/MedicalProfile';

const MedicalProfilePage = async() => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <MedicalProfile session={session}/>
        </div>
    );
};

export default MedicalProfilePage;
import { authOptions } from '@/app/api/auth/[...nextauth]/AuthOptions';
import MyAppointmentTable from '@/components/Ui/Table/MyAppointmentTable';
import { getServerSession } from 'next-auth';
import React from 'react';

const MyAppointments = async() => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <MyAppointmentTable session={session}/>
        </div>
    );
};

export default MyAppointments;
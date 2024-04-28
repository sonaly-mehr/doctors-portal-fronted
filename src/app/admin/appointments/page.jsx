import React from 'react';
import { getAllAppointments } from '@/services/getAllAppointments';
import AppointmentsTable from '@/components/Ui/Table/AppointmentsTable';

const Appointments = async({searchParams}) => {
    const appointments = await getAllAppointments(searchParams);
    return (
        <div>
            <AppointmentsTable appointments={appointments}/>
        </div>
    );
};

export default Appointments;
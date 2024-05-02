import AvailableServiceTable from '@/components/Ui/Table/AvailableServiceTable';
import { getAvailableServices } from '@/services/getAvailableServices';
import React from 'react';

const AvailableServicesPage = async({searchParams}) => {
    const services = await getAvailableServices(searchParams);
    console.log("available Services", services)
    return (
        <div>
            <AvailableServiceTable services={services}/>
        </div>
    );
};

export default AvailableServicesPage;
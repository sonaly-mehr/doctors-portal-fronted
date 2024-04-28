import CreateServiceForm from '@/components/Ui/Form/CreateServiceForm';
import { getAllSpecializations } from '@/services/getAllSpecializations';
import React from 'react';

const Create = async () => {
    const specializationsData = await getAllSpecializations();
    return (
        <div>
            <CreateServiceForm specializationsData={specializationsData}/>
        </div>
    );
};

export default Create;
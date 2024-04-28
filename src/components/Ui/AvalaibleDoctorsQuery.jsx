"use server"
import React from 'react';
import AvailableDoctorsTable from '@/components/Ui/Table/AvailableDoctorsTable';
import { getAvailableDoctors } from '@/services/getAvailableDoctors';


// async function getDoctors() {
//     "use server"; // mark function as a server action (fixes the error)
//     const doctors = await getAvailableDoctors(query);
//     console.log("doctors", doctors)
  
//     // TODO add item deletion logic
//     return null;
//   }

const AvalaibleDoctorsQuery =async({page, setPage, size, setSize}) => {

    // async function getDoctors() {
    //     'use server'

        let query = {}

        query["page"]= page
        query["limit"] = size
     
        const doctors = await getAvailableDoctors({...query});
        console.log("doctors", doctors)
     
        // mutate data
        // revalidate cache
    //   }

    const fetchAvailableDoctor = 


    // const availableDoctors = getDoctors()
    // console.log("available doctors", availableDoctors)

    return (
        <div>
            <AvailableDoctorsTable doctors={doctors}/>
        </div>
    );
};

export default AvalaibleDoctorsQuery;
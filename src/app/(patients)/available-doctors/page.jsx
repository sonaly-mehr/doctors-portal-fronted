import React from "react";
// import AvalaibleDoctorsQuery from "@/components/Ui/AvalaibleDoctorsQuery";
import { getAvailableDoctors } from "@/services/getAvailableDoctors";
import AvailableDoctorsTable from "@/components/Ui/Table/AvailableDoctorsTable";

// const fetchDoctorsData = async(query) => {
//     "use server"
//     // const data = await getAvailableDoctors(query);
//     return await getAvailableDoctors(query);
//     // console.log("doctors dataaa", data)

// }

const AvalaibleDoctors = async({searchParams}) => {
  console.log("search", searchParams)
  let query = {};

  let page = 1;
  let size = 3;
  
  query["page"]= page
  query["limit"] = size;

  const doctors = await getAvailableDoctors({...query})
  return (
    <div>
        <AvailableDoctorsTable doctors={doctors} page={query} size={size}/>
    </div>
  );
};

export default AvalaibleDoctors;

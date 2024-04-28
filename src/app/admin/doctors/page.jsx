import React from "react";
import { getAllDoctors } from "@/services/getAllDocotors";
import DoctorsTable from "@/components/Ui/Table/DoctorsTable";

const page = async({searchParams}) => {
  const doctors = await getAllDoctors(searchParams);
  return (
    <div>
      <DoctorsTable doctors={doctors}/>
    </div>
  );
};

export default page;

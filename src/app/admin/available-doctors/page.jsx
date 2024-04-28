
import React from "react";
import { getAvailableDoctors } from "@/services/getAvailableDoctors";
import AvailableDoctorsTable from "@/components/Ui/Table/AvailableDoctorsTable";

const AvailableDoctors = async ({searchParams}) => {
  const doctors = await getAvailableDoctors(searchParams);
  return (
    <div>
      <AvailableDoctorsTable doctors={doctors}/>
    </div>
  );
};

export default AvailableDoctors;

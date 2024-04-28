import React from "react";
import { getPatientData } from "@/services/getPatientData";
import PatientsTable from "@/components/Ui/Table/PatientsTable";

const page = async({searchParams}) => {
  const patients = await getPatientData(searchParams);
  return (
    <div>
      <PatientsTable patients={patients}/>
    </div>
  );
};

export default page;

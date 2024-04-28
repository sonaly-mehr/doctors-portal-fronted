import React from "react";
import CreateAvailableServiceForm from "@/components/Ui/Form/CreateAvailableServiceForm";
import { getAllServices } from "@/services/getServices";
import { getAvailableDoctors } from "@/services/getAvailableDoctors";
import { getAllSlots } from "@/services/getAllSlots";

const Create = async ({searchParams}) => {
  const services = await getAllServices(searchParams);
  console.log("services", services)
  const doctors = await getAvailableDoctors(searchParams);
  const slots = await getAllSlots();
  console.log("slots", slots)


  return (
    <div>
      <CreateAvailableServiceForm services={services} doctors={doctors} slots={slots}/>
    </div>
  );
};

export default Create;

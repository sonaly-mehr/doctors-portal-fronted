
import React from "react";
import ServiceTable from "@/components/Ui/Table/ServiceTable";
import { getAllServices } from "@/services/getServices";

const page = async ({searchParams}) => {
  const serviceData = await getAllServices(searchParams);
  return (
    <div>
      <ServiceTable serviceData={serviceData} />
    </div>
  );
};

export default page;

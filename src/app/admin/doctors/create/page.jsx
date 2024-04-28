import React from "react";
import CreateDoctorsForm from "@/components/Ui/Form/CreateDoctorsForm";
import { getSpecializations } from "@/services/getSpecializations";

const Create = async () => {
  const specializations = await getSpecializations();

  return (
    <div>
      <CreateDoctorsForm specializations={specializations} />
    </div>
  );
};

export default Create;

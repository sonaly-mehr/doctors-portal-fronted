import React from "react";
import UpdateMedicalProfile from "@/components/Ui/Form/UpdateMedicalProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/AuthOptions";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <UpdateMedicalProfile session={session} />
    </div>
  );
};

export default page;

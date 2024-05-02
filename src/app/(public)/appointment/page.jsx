
import AvailableServices from "@/components/Ui/AvailableServices";
import { getAvailableServices } from "@/services/getAvailableServices";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/AuthOptions";

const Appointment = async({searchParams}) => {
  const availableServices = await getAvailableServices(searchParams);
  console.log("available Services", availableServices)
  const session = await getServerSession(authOptions);
  return (
    <>
    <AvailableServices availableServices={availableServices} session={session}/>
    </>
  );
};

export default Appointment;

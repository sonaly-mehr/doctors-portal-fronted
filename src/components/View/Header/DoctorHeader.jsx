import { authOptions } from "@/app/api/auth/[...nextauth]/AuthOptions";
import Header from "@/components/Ui/Header";
import { getServerSession } from "next-auth";

const DoctorHeader = async () => {
  const navLinks = [{ key: "1", label: "My Profile", href: "/doctor/my-profile" }];
  const session = await getServerSession(authOptions)
  return (
    <>
      <Header
        navLinks={navLinks}
        session={session?.accessToken ? true : false}
      />
    </>
  );
};

export default DoctorHeader;
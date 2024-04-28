import { authOptions } from "@/app/api/auth/[...nextauth]/AuthOptions";
import Header from "@/components/Ui/Header";
import { getServerSession } from "next-auth";

const PatientHeader = async () => {
  const navLinks = [{ key: "1", label: "My Profile", href: "/my-profile" }];
  const session = await getServerSession(authOptions);
  const {id} = session;
  console.log("session id", id)
  return (
    <>
      <Header
        navLinks={navLinks}
        session={session?.accessToken ? true : false}
      />
    </>
  );
};

export default PatientHeader;
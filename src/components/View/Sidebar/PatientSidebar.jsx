import Sidebar from "@/components/Ui/Sidebar";
import { MdDashboard } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const PatientSidebar = ({children }) => {
  const items = [
    { key: "1", icon: <MdDashboard />, label: "Dashboard", href: "/dashboard" },
    {
      key: "2",
      icon: <RiServiceFill />,
      label: "Available Services",
      href: "/appointment",
    },
    {
      key: "3",
      icon: <FaUserDoctor />,
      label: "Available Doctors",
      href: "/available-doctors",
    },
    {
      key: "4",
      icon: <ImProfile />,
      label: "Medical Profile",
      href: "/medical-profile",
    },
    {
      key: "5",
      icon: <BiSolidReport />,
      label: "My Appointments",
      href: "/my-appointments",
    },
    {
      key: "6",
      icon: <FaHistory />,
      label: "Payment History",
      href: "/payment-history",
    },
  ];
  return (
    <div>
      <Sidebar items={items}>{children}</Sidebar>
    </div>
  );
};

export default PatientSidebar;

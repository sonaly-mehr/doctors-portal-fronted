"use client";
import Sidebar from "@/components/Ui/Sidebar";
import { MdDashboard } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";

const DoctorSidebar = ({ children }) => {
  const items = [
    {
      key: "1",
      icon: <MdDashboard />,
      label: "Dashboard",
      href: "/doctor/dashboard",
    },
    {
      key: "2",
      icon: <MdEventAvailable />,
      label: "My Availability",
      href: "/doctor/my-availability",
    }
  ];
  return (
    <div>
      <Sidebar items={items}>{children}</Sidebar>
    </div>
  );
};

export default DoctorSidebar;

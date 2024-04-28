"use client";
import Sidebar from "@/components/Ui/Sidebar";
import { MdDashboard,MdOutlineMedicalServices } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { FaUserDoctor,FaSuitcaseMedical } from "react-icons/fa6";
import { BiSolidReport,BiSolidTimer } from "react-icons/bi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";

const adminidebar = ({ children }) => {
  const items = [
    {
      key: "1",
      icon: <MdDashboard />,
      label: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      key: "2",
      icon: <RiServiceFill />,
      label: "Services",
      href: "/admin/services",
    },
    {
      key: "3",
      icon: <MdOutlineMedicalServices />,
      label: "Available Services",
      href: "/admin/available-services",
    },
    {
      key: "4",
      icon: <FaUserDoctor />,
      label: "Doctors",
      href: "/admin/doctors",
    },
    {
      key: "5",
      icon: <FaSuitcaseMedical />,
      label: "Available Doctors",
      href: "/admin/available-doctors",
    },
    {
      key: "6",
      icon: <GrUserManager />,
      label: "Pateints",
      href: "/admin/patients",
    },
    {
      key: "7",
      icon: <BiSolidReport />,
      label: "Appointments",
      href: "/admin/appointments",
    },
    {
      key: "8",
      icon: <FaHandHoldingMedical />,
      label: "Specializations",
      href: "/admin/specializations",
    },
    {
      key: "9",
      icon: <BiSolidTimer />,
      label: "Time Slots",
      href: "/admin/time-slots",
    },
  ];
  return (
    <div>
      <Sidebar items={items}>{children}</Sidebar>
    </div>
  );
};

export default adminidebar;

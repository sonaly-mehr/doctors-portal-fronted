"use client";
import Image from "next/image";
import React from "react";
import patient from "../../assets/patient.webp";
import { FaTransgender, FaRegAddressCard } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { MdContactPhone } from "react-icons/md";
import { SiStatuspage } from "react-icons/si";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import { useGetPatientQuery } from "@/redux/api/patientApi";

const MedicalProfile = ({ session }) => {
  const { data, isLoading } = useGetPatientQuery(session?.id);
  const profile = data?.data;
  // const profile = [
  //     {
  //         icon: <FaTransgender />,
  //         text: ""
  //     }
  // ]
  return (
    <div className="border-[1px] border-solid border-primary px-5 py-10 rounded-lg w-1/2 m-auto bg-white">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Image
            src={profile?.profilePricture ? profile?.profilePricture : patient}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <h4 className="font-semibold text-xl">{profile?.fullName}</h4>
        </div>
        <div className="flex justify-end">
          <Menu>
            <MenuHandler className="cursor-pointer">
              <span>...</span>
            </MenuHandler>
            <MenuList className="p-1 min-w-[80px]">
              <Link href="/medical-profile/edit">
                <MenuItem>Edit</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="mt-5">
        <h5 className="font-semibold text-lg mb-2">Medical Profile:</h5>

        <ul className="flex flex-col gap-2 text-gray-600">
          <li className="flex gap-3">
            <FaTransgender className="text-primary" />{" "}
            {profile?.medicalProfile?.gender}
          </li>
          <li className="flex gap-3">
            {" "}
            <CiCalendarDate className="text-primary" />
            {profile?.medicalProfile?.dob}
          </li>
          <li className="flex gap-3">
            {" "}
            <MdContactPhone className="text-primary" />
            {profile?.medicalProfile?.emergencyContact}
          </li>
          <li className="flex gap-3">
            {" "}
            <SiStatuspage className="text-primary" />
            {profile?.medicalProfile?.profileStatus}
          </li>
          <li className="flex gap-3">
            {" "}
            <FaRegAddressCard className="text-primary" />
            {profile?.medicalProfile?.address}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MedicalProfile;

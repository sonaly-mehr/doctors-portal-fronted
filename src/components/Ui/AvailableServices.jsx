"use client";
import React, { useState } from "react";
import styles from "../../app/styles/index.module.css";
import Image from "next/image";
import clinic from "../../assets/chair 1.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "./Button";
import BookAppointment from "./Modal/BookAppointment";

const AvailableServices = ({ availableServices, session }) => {
  const [value, onChange] = useState(new Date());
  const [dateValue, setDateValue] = useState(new Date());

  console.log("available Services", availableServices);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const date = value.toDateString();
  const pickDate = dateValue.toDateString();
  console.log("calender value", date);
  console.log("date value", pickDate);

  const [singleId, setSingleId] = useState("");
  console.log("single id", singleId);

  return (
    <div className="relative mb-[15rem]">
      <div className={`${styles.landing__bg} h-screen`}>
        <div className="w-3/4 m-auto flex justify-around items-center pt-8">
          <div>
            <Calendar
              onChange={onChange}
              value={value}
              className={`${styles.calender__boxShaddow} rounded-xl p-4`}
            />
          </div>

          <div>
            <Image src={clinic} alt="" unoptimized={true} />
          </div>
        </div>
      </div>
      <div className="w-3/4 mt-5 pt-10 pb-16 px-10 absolute top-[400px] left-1/2 -translate-x-1/2 bg-white shadow-[0px_0px_10px_0px_#e2e2e2;] rounded-xl">
        <div className="text-center">
          <h4 className="text-[22px] text-green font-normal">
            Available Services on {date}
          </h4>
          <span className="text-[22px] text-[#939393] font-normal block mt-2 mb-8">
            Please select a service.
          </span>
        </div>

        <div className="flex gap-6 flex-wrap justify-between">
          {availableServices?.data?.map((service, index) => (
            <div
              key={index}
              className={`${styles.services__shaddow} text-center basis-[31%] py-10 bg-white rounded-2xl`}
            >
              <h4 className="font-semibold text-xl text-green">
                {" "}
                {service?.service?.name}
              </h4>
              <span className="text-sm mt-2 mb-8 block">
                {service?.slot?.startTime}
              </span>
              <div
                onClick={() => {
                  handleOpen();
                  setSingleId(service?.id);
                }}
              >
                <Button text="Book Appointment" px="6" py="4" />
              </div>
            </div>
          ))}
        </div>
{/* 
        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            type="date"
            value={pickDate}
            onChange={(e) => setDateValue(e.target.value)}
            ser
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div> */}

        <BookAppointment
          handleOpen={handleOpen}
          open={open}
          date={date}
          id={singleId}
          session={session}
        />

        {/* <ServiceSlots services={services}/> */}
      </div>
    </div>
  );
};

export default AvailableServices;

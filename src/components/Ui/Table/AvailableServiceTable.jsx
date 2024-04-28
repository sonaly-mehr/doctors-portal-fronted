"use client";
import React, { useState } from "react";
import {
  MdEdit,
  MdOutlineDelete,
} from "react-icons/md";
import Link from "next/link";
import {
  Card,
  Typography,
} from "@material-tailwind/react";
import moment from "moment";
import UserHeading from "../UserHeading";

const TABLE_HEAD = [
  "Available Service",
  "Slot",
  "Fees",
  "Available Seats",
  "Action",
];

const AvailableServiceTable = ({ services }) => {
  console.log("available Services", services);
  const data = services?.data;

  return (
    <div>
      <Card className="h-full w-full">
        <UserHeading
          // handleSearch={handleSearch}
          userlist="Available services list"
          info="See information about all available services"
          // search={search}
          createRoute="/admin/available-services/create"
        />
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map(
              (
                { id, service, slotDate, slot, fees, availableSeats },
                index
              ) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={service?.name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {service?.name}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <div className="flex flex-col gap-3">
                        <div key={index} className="flex flex-col gap-1">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {moment(slotDate).format("DD MMM YYYY")}
                            {/* {slotDate} */}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {slot?.startTime}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className={`${classes}`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {fees}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        // color={availableSeats>0 ? "red" : "red"}
                        className={`font-semibold text-base ${
                          availableSeats > 0 ? "text-[#4CA84D]" : "text-red-500"
                        }`}
                      >
                        {availableSeats}
                      </Typography>
                    </td>
                    <td className={`${classes} flex h-[80px] gap-5 `}>
                      <Link
                        href={`/admin/available-services/edit/${id}`}
                        className="text-[#19D3AE]"
                      >
                        <MdEdit />
                      </Link>
                      {/* </Link> */}
                      <MdOutlineDelete
                        className="text-[#b60000] cursor-pointer"
                        //   onClick={() => handleDeleteService(id)}
                      />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AvailableServiceTable;

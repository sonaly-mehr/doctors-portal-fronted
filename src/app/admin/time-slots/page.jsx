"use client";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { Card, Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["Slots", ""];
const page = () => {
  const data = [
    {
      id: 1,
      slot: "10 AM",
    },
    {
      id: 2,
      slot: "10 AM",
    },
    {
      id: 3,
      slot: "10 AM",
    },
    {
      id: 4,
      slot: "10 AM",
    },
    {
      id: 5,
      slot: "10 AM",
    },
  ];
  return (
    <div>
        <div className="mb-14">
        <h4 className="font-medium mb-2 text-base">Create Slot</h4>
        <form action="">
            <input type="text" placeholder="Enter time" className="formInput"/>
            <button type="submit" className="bg-secondary px-4 py-2.5 text-white rounded-lg text-sm ml-4">Submit</button>
        </form>
        </div>
      <Card className="h-full w-full">
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
            {data?.map((time, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={time?.slot}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {time?.slot}
                    </Typography>
                  </td>
                  <td className={`${classes} flex gap-5 bg-blue-gray-50/50`}>
                    <MdOutlineDelete
                      className="text-[#b60000] cursor-pointer"
                      //   onClick={() => handleDeleteService(id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default page;

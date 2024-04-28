"use client";
import React from "react";
import { useGetPatientQuery } from "@/redux/api/patientApi";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Services", "Amount", "Payment Date", "Payment"];

const PaymentHistoryTable = (session) => {
  const { data, isLoading } = useGetPatientQuery(session?.session?.id);
  const appointments = data?.data;
  console.log("patient data", data);
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h5" color="blue-gray">
          Payment History
        </Typography>
      </CardHeader>
      <CardBody className=" px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
            {appointments?.appointments?.map((appointment, index) => {
              const isLast = index === appointments?.appointments?.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={appointment?.availableService?.service?.name}>
                  <td className={classes}>
                    <div className="">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {appointment?.availableService?.service?.name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ${appointment?.availableService?.fees}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {appointment?.payment?.paymentDate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        size="sm"
                        variant="ghost"
                        value={appointment?.payment?.paymentStatus}
                        className={
                          appointment?.payment?.paymentStatus === "paid"
                            ? "text-[#1B5E20] bg-[#D5EBDA]"
                            : appointment?.payment?.paymentStatus === "pending"
                            ? "text-[#FF6F00] bg-[#FFF3CD]"
                            : "red"
                        }
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default PaymentHistoryTable;

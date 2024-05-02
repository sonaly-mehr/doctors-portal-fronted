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
import { useCancelAppointmentMutation } from "@/redux/api/bookAppointmentApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const TABLE_HEAD = [
  "Services",
  "Amount",
  "Status",
  "Appointment Date",
  "Payment",
  "Action",
];

const MyAppointmentTable = (session) => {
  const { data, isLoading } = useGetPatientQuery(session?.session?.id);
  const appointments = data?.data;
  console.log("patient data", data);
  const [cancelAppointment] = useCancelAppointmentMutation();

  const HandleCancelAppointment = async (id) => {
    try {
      const res = await cancelAppointment(id);
      console.log("res data", res?.data?.message);
      if (res?.data) {
        toast.success(`${res?.data?.message}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        // router.push("/login")
      }
    } catch (err) {
      console.error(err.message);
      toast.error(`${err.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Appointments
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about your recent appointments
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
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
              {appointments?.appointments?.length>0 ? 
              appointments?.appointments?.map((appointment, index) => {
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
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={appointment?.status}
                          className={
                            appointment?.status === "paid" ||
                            appointment?.status === "completed"
                              ? "text-[#1B5E20] bg-[#D5EBDA]"
                              : appointment?.status === "pending"
                              ? "text-[#FF6F00] bg-[#FFF3CD]"
                              : appointment?.status === "cancelled" &&
                                "text-[#B71C1C] bg-[#FDD9D7]"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {appointment?.appointmentDate}
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
                              : appointment?.payment?.paymentStatus ===
                                "pending"
                              ? "text-[#FF6F00] bg-[#FFF3CD]"
                              : appointment?.payment?.paymentStatus ===
                                  "cancelled" && "text-[#B71C1C] bg-[#FDD9D7]"
                          }
                        />
                      </div>
                    </td>
                    <td className={`${classes} flex gap-4 h-[57px]`}>
                      {appointment?.status !== "cancelled" &&
                        appointment?.payment?.paymentStatus !== "paid" && (
                          <Link href={`/my-appointments/${appointment?.id}/checkout`}>
                          <Chip
                            size="sm"
                            value="pay"
                            variant="ghost"
                            className="text-[#1B5E20] bg-[#D5EBDA] cursor-pointer"
                          />
                          </Link>
                        )}
                      {appointment?.status !== "cancelled" &&
                        appointment?.status !== "completed" && (
                          <Chip
                            size="sm"
                            variant="ghost"
                            value="cancel"
                            color={"red"}
                            className="cursor-pointer"
                            onClick={() =>
                              HandleCancelAppointment(appointment?.id)
                            }
                          />
                        )}
                    </td>
                  </tr>
                );


              } 
              ): 
              <></>
              // <p className="text-black flex justify-center my-6">No Appointments to show!</p>
              }
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
      <ToastContainer />
    </>
  );
};

export default MyAppointmentTable;

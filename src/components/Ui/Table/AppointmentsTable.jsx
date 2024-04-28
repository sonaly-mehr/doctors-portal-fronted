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
  Select,
  Option,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  useCancelAppointmentMutation,
  useCompleteAppointmentMutation,
  useStartAppointmentMutation,
  useUpdateAppointmentMutation,
} from "@/redux/api/bookAppointmentApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TABLE_HEAD = [
  "Services",
  "Amount",
  "Status",
  "Appointment Date",
  "Payment",
  "Action",
];

const AppointmentsTable = ({ appointments }) => {
  const [startAppointment] = useStartAppointmentMutation();
  const [completeAppointment] = useCompleteAppointmentMutation();

  const HandleAppointment = async (id, appAction) => {
    try {
      const res = await appAction(id);
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

  console.log("all apppointment", appointments);
  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <Typography variant="h5" color="blue-gray">
            Appointments
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            These are details about all appointments
          </Typography>
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
              {appointments?.data?.map(
                (
                  { id, appointmentDate, availableService, payment, status },
                  index
                ) => {
                  const isLast = index === appointments?.data?.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={availableService?.service?.name}>
                      <td className={classes}>
                        <div className="">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {availableService?.service?.name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          ${availableService?.fees}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={status}
                            className={
                              status === "paid" ||
                              status === "completed" ||
                              status === "started"
                                ? "text-[#1B5E20] bg-[#D5EBDA]"
                                : status === "pending"
                                ? "text-[#FF6F00] bg-[#FFF3CD]"
                                : status === "cancelled" &&
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
                          {appointmentDate}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={payment?.paymentStatus}
                            className={
                              payment?.paymentStatus === "paid"
                                ? "text-[#1B5E20] bg-[#D5EBDA]"
                                : payment?.paymentStatus === "pending"
                                ? "text-[#FF6F00] bg-[#FFF3CD]"
                                : payment?.paymentStatus === "cancelled" &&
                                  "text-[#B71C1C] bg-[#FDD9D7]"
                            }
                          />
                        </div>
                      </td>
                      <td className={`${classes} flex gap-4 h-[57px]`}>
                        <Menu>
                          <MenuHandler>
                            <Button className="p-0 w-[75px] h-[30px] bg-[#EEF5FB] text-[#0075BA] rounded">Action</Button>
                          </MenuHandler>
                          <MenuList className="p-1 min-w-[120px]">
                            <MenuItem
                              onClick={() =>
                                HandleAppointment(id, startAppointment)
                              }
                            >
                              Start
                            </MenuItem>
                            <MenuItem
                              onClick={() =>
                                HandleAppointment(id, completeAppointment)
                              }
                            >
                              Complete
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
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
        </CardFooter> */}
      </Card>
      <ToastContainer />
    </>
  );
};

export default AppointmentsTable;

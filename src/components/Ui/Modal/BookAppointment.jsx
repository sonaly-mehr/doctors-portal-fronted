"use client";
import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { useGetAvailableServiceQuery } from "@/redux/api/availableServiceApi";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateBookingMutation } from "@/redux/api/bookAppointmentApi";

const BookAppointment = ({ open, handleOpen, date, id, session }) => {
  const { data, isLoading } = useGetAvailableServiceQuery(id);
  const service = data?.data;
  console.log("single service data", service?.id);
  const [createBooking] = useCreateBookingMutation(undefined);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (value) => {
    const options = {
      patientName: value.patientName,
      phoneNumber: value.phoneNumber,
      email: value.email,
      patientId: session?.id,
      availableServiceId: service?.id,
      appointmentDate: date,
    };
    console.log("values", options);
    try {
      const res = await createBooking(options);
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
      <Dialog
        className="bg-transparent shadow-none"
        size="md"
        open={open}
        handler={handleOpen}
      >
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Card className="mx-auto w-full max-w-[33rem]">
            <CardBody className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h4 className="font-semibold text-xl text-black capitalize">
                  {service?.service?.name}
                </h4>
                <RxCross2
                  onClick={handleOpen}
                  className="cursor-pointer bg-secondary rounded-full text-[#8391AD] text-[40px] p-2"
                />
              </div>

              <div className="flex flex-col gap-6 mt-5">
                <span className="bg-[#E6E6E6] p-3 w-full block rounded-lg text-black">
                  {date}
                </span>
                <span className="bg-[#E6E6E6] p-3 w-full block rounded-lg text-black">
                  {service?.slot?.startTime}
                </span>
              </div>

              <Input
                type="text"
                label="name"
                size="lg"
                {...register("patientName", { required: true })}
              />
              <Input
                type="text"
                label="number"
                size="lg"
                {...register("phoneNumber", { required: true })}
              />
              <Input
                type="email"
                label="Email"
                size="lg"
                {...register("email", { required: true })}
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                type="submit"
                className="py-3.5 bg-secondary text-base font-normal text-[#D4D9E3]"
                onClick={handleOpen}
                fullWidth
              >
                SUBMIT
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
      <ToastContainer />
    </>
  );
};

export default BookAppointment;

"use client";
import React from "react";
import { Input } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateAvailableServiceMutation } from "@/redux/api/availableServiceApi";

const CreateAvailableServiceForm = ({ services, doctors, slots }) => {
  const router = useRouter();

  const [createAvailableService] = useCreateAvailableServiceMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (value) => {
    const options = {
      slotDate: value.slotDate,
      availableSeats: value.availableSeats,
      fees: value.fees,
      serviceId: value.serviceId,
      slotId: value.slotId,
      availableDoctorId: value.availableDoctorId,
    };
    try {
      const res = await createAvailableService(options);
      console.log("res data", res?.data?.message);
      if (res?.data) {
        toast.success(`${res?.data?.message}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        // router.refresh();
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
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-1/2 m-auto bg-white p-8 flex flex-col gap-4"
      >
        <Input
          type="date"
          label="Slot Date"
          {...register("slotDate", { required: true })}
        />
        <Input
          type="number"
          label="Available Seats"
          {...register("availableSeats", { required: true, valueAsNumber: true})}
        />
        <Input
          type="text"
          label="Fees"
          {...register("fees", { required: true })}
        />
        <label htmlFor="" className="text-sm mb-[-4px]">
          Choose Service
        </label>
        <select
          label="select"
          {...register("serviceId", { required: true })}
          className="cursor-pointer text-sm px-3 py-2.5 rounded-[7px] border-[1px] border-solid border-blue-gray-200 focus:border-gray-900 mt-[-7px]"
        >
          {services?.data?.map((service, index) => (
            <option key={index} value={service?.id}>
              {service?.name}
            </option>
          ))}
        </select>

        <label htmlFor="" className="text-sm mb-[-4px]">
          Available Doctor
        </label>
        <select
          label="select"
          {...register("availableDoctorId", { required: true })}
          className="cursor-pointer text-sm px-3 py-2.5 rounded-[7px] border-[1px] border-solid border-blue-gray-200 focus:border-gray-900 mt-[-7px]"
        >
          {doctors?.data?.map((doctor, index) => (
            <option key={index} value={doctor?.id}>
              {doctor?.doctor?.fullName}
            </option>
          ))}
        </select>

        <label htmlFor="" className="text-sm mb-[-4px]">
          Time Slots
        </label>
        <select
          label="select"
          {...register("slotId", { required: true })}
          className="cursor-pointer text-sm px-3 py-2.5 rounded-[7px] border-[1px] border-solid border-blue-gray-200 focus:border-gray-900 mt-[-7px]"
        >
          {slots?.map((slot, index) => (
            <option key={index} value={slot?.id}>
              {slot?.startTime}
            </option>
          ))}
        </select>
        <Button
          type="submit"
          variant="gradient"
          size="md"
          className="bg-secondary text-sm"
        >
          Create
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateAvailableServiceForm;

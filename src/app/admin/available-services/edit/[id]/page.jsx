"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAvailableServiceQuery, useUpdateAvailableServiceMutation } from "@/redux/api/availableServiceApi";

const Edit = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useGetAvailableServiceQuery(id);
  const availableService = data?.data;

  const [updateAvailableService] = useUpdateAvailableServiceMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await updateAvailableService({id, body: data });
      console.log("res data", res?.data?.message);
      if (res?.data) {
        toast.success(`${res?.data?.message}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        router.refresh();
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

        {/* <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
            Slot Date
          </label>
        <input
          type="date"
          defaultValue={availableService?.slotDate}
          {...register("slotDate", { required: true })}
          className="formInput"
        />
        </div> */}
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
          Fees
          </label>
        <input
          type="text"
          defaultValue={availableService?.fees}
          {...register("fees", { required: true })}
          className="formInput"
        />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
          Available Seats
          </label>
        <input
          type="number"
          defaultValue={availableService?.availableSeats}
          {...register("availableSeats", { required: true , valueAsNumber: true})}
          className="formInput"
        />
        </div>

        <Button
          type="submit"
          variant="gradient"
          size="md"
          className="bg-secondary text-sm"
        >
          Edit
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Edit;

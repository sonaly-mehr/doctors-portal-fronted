"use client";
import React from "react";
import { Input } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useGetServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/servicesApi";

const Edit = ({ params }) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useGetServiceQuery(id);
  const serviceData = data?.data;

  const [updateService] = useUpdateServiceMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await updateService({ id, body: data });
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
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
            Name
          </label>
        <input
          type="text"
          defaultValue={serviceData?.name}
          {...register("name", { required: true })}
          name="name"
          className="formInput"
        />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
            Description
          </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          defaultValue={serviceData?.description}
          {...register("description", { required: true })}
          className="formInput"
        ></textarea>
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

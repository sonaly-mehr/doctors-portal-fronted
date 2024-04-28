"use client";
import React from "react";
import { Input, Textarea, Select, Option } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateDoctorMutation } from "@/redux/api/doctorsApi";

const CreateDoctorsForm = ({specializations}) => {
    console.log("specializations", specializations)
  const router = useRouter();

  const [createDoctor] = useCreateDoctorMutation();
  const { register, handleSubmit } = useForm();


  const onSubmit = async (value) => {
    const options = {
        fullName: value.fullName,
        email: value.email,
        password: value.password,
        phoneNumber: value.phoneNumber,
        role: value.role,
        qualification:value.qualification,
      specializationId: value.specializationId,
    };
    try {
      const res = await createDoctor(options);
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
        <Input
          type="text"
          label="Full Name"
          {...register("fullName", { required: true })}
        />
                <Input
          type="email"
          label="Email"
          {...register("email", { required: true })}
        />
                                <Input
          type="password"
          label="Password"
          {...register("password", { required: true })}
        />
                <Input
          type="text"
          label="Phone Number"
          {...register("phoneNumber", { required: true })}
        />
                <Input
          type="text"
          label="Qualification"
          {...register("qualification", { required: true })}
        />

                <select
          label="select"
          {...register("role", { required: true })}
          className="cursor-pointer text-sm px-3 py-2.5 rounded-[7px] border-[1px] border-solid border-blue-gray-200 focus:border-gray-900 mt-[-7px]"
        >
            <option value="doctor">
              Doctor
            </option>
        </select>
        <select
          label="select"
          {...register("specializationId", { required: true })}
          className="cursor-pointer text-sm px-3 py-2.5 rounded-[7px] border-[1px] border-solid border-blue-gray-200 focus:border-gray-900 mt-[-7px]"
        >
          {specializations?.map((specialization, index) => (
            <option key={index} value={specialization?.id}>
              {specialization?.name}
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

export default CreateDoctorsForm;

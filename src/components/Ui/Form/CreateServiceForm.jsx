"use client";
import React from "react";
import { Input, Textarea, Select, Option } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateServiceMutation } from "@/redux/api/servicesApi";

const CreateServiceForm = ({ specializationsData }) => {
  const router = useRouter();

  const [createService] = useCreateServiceMutation();
  const { register, handleSubmit } = useForm();

  console.log("specializations data", specializationsData);

  const onSubmit = async (value) => {
    const options = {
      name: value.name,
      description: value.description,
      specializationId: value.specializationId,
    };
    try {
      const res = await createService(options);
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
          label="Name"
          {...register("name", { required: true })}
        />

        <Textarea
          label="Description"
          {...register("description", { required: true })}
        ></Textarea>

        {/* <Select name="specializationId" label="Select Specialization" {...register("specializationId", { required: true })}>
          {specializationsData?.map(({id, name}) => (
            <Option name={id} key={id} value={id}>{name}</Option>
          ))}
        </Select> */}
        <select
          label="select"
          {...register("specializationId", { required: true })}
          className="text-sm px-3 py-2.5 rounded-[7px] border-[1px] border-solid border-blue-gray-200 focus:border-gray-900 mt-[-7px]"
        >
          {specializationsData?.map((specialization, index) => (
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

export default CreateServiceForm;

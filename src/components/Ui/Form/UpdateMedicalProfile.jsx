"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useGetPatientQuery,
  useUpdateMedicalProfileMutation,
} from "@/redux/api/patientApi";
import upload from "../../../assets/upload-icon.svg";
import Image from "next/image";

const UpdateMedicalProfile = ({ session }) => {
  const { data, isLoading } = useGetPatientQuery(session?.id);
  console.log("update data", data)
  const { id, address, emergencyContact, profilePricture } = data?.data?.medicalProfile;
  const router = useRouter();
  const [updateMedicalProfile] = useUpdateMedicalProfileMutation();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await updateMedicalProfile({ id, body: data });
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
        <div class="rounded-md border border-indigo-500 bg-gray-50 p-4 shadow-md w-full">
          <label
            for="upload"
            class="flex flex-col items-center gap-2 cursor-pointer"
          >
            <Image src={upload} alt="" className="w-10 h-10" />
            <span class="text-gray-600 font-medium">Upload Image</span>
          </label>
          <input id="upload" type="file" class="hidden" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
            Emergency Contact
          </label>
          <input
            type="text"
            defaultValue={emergencyContact}
            {...register("emergencyContact", { required: true })}
            className="formInput"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-xs">
            Address
          </label>
          <input
            type="text"
            defaultValue={address}
            {...register("address", { required: true })}
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

export default UpdateMedicalProfile;

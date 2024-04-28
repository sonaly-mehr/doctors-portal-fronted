"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "../../../app/styles/index.module.css";
import Link from "next/link";
import { usePatientRegisterMutation } from "@/redux/api/patientApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [patientRegister, {isLoading, isError, isSuccess}] = usePatientRegisterMutation();

  const onSubmit = async (value) => {
    const options = {
      fullName: value.fullName,
      email: value.email,
      password: value.password,
      phoneNumber: value.phoneNumber,
      medicalProfile: {
        address: value.address,
        dob: value.dob,
        gender: value.gender,
        emergencyContact: value.emergencyContact,
      },
    };
    try {
      const res = await patientRegister(options);
      console.log("res data", res?.data?.message)
      if (res?.data) {
        toast.success(`${res?.data?.message}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        // router.push("/login")
      }
    } 
    catch (err) {
      console.error(err.message);
      toast.error(`${err.message}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.form__shaddow} w-[35%] m-auto bg-white rounded-2xl px-10 py-8`}
      >
        <span className="text-xl flex font-medium justify-center mb-6">
          Sign Up
        </span>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              placeholder="Enter your full name"
              className="formInput"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="formInput"
            />
          </div>
          </div>

          <div className="flex gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="formInput"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Phone Number
            </label>
            <input
              type="text"
              {...register("phoneNumber", { required: true })}
              placeholder="Enter your phone number"
              className="formInput"
            />
          </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Full Address
            </label>
            <textarea
              {...register("address", { required: true })}
              placeholder="Enter your address"
              className="formInput"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="gender" className="text-sm">
              Gender
            </label>
            <select
              {...register("gender", { required: true })}
              id="gender"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Date Of Birth
            </label>
            <input
              type="date"
              {...register("dob", { required: true })}
              // placeholder="Enter your phone number"
              className="formInput"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Emergency Contact
            </label>
            <input
              type="text"
              {...register("emergencyContact", { required: true })}
              placeholder="Enter emergency contact"
              className="formInput"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-5 mb-3 bg-secondary rounded-lg py-3 text-[#D4D9E3] text-base uppercase"
        >
          Sign Up
        </button>
        <span className="text-xs font-medium flex justify-center capitalize">
          Already have an account?{" "}
          <Link href="/login" className="ml-2 text-[#19D3AE]">
            Login
          </Link>
        </span>
      </form>
      <ToastContainer />
    </>
  );
};

export default SignUpForm;

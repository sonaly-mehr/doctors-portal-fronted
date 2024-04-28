"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import styles from "../../../app/styles/index.module.css";
import Link from "next/link";

const LoginFrorm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const result = await signIn("doctors-portal-backend", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (result?.ok && !result.error) {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div
      className={`${styles.form__shaddow} w-[30%] m-auto bg-white rounded-2xl p-10`}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="text-xl flex font-medium justify-center mb-6">
          Login
        </span>
        <div className="flex flex-col gap-3">
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
        </div>
        <Link href="/" className="text-[10px] font-semibold mt-1.5 block">
          Forgot Password ?
        </Link>

        <button
          type="submit"
          className="w-full mt-4 mb-3 bg-secondary rounded-lg py-3 text-[#D4D9E3] text-base uppercase"
        >
          LOGIN
        </button>
        <span className="text-xs font-medium flex justify-center">
          New to Doctors Portal?{" "}
          <Link href="/signup" className="ml-2 text-[#19D3AE]">
            Create new account
          </Link>
        </span>
      </form>
      <div>
        <span
          className={`text-secondary uppercase block text-center mt-4 mb-6 ${styles.before__after}`}
        >
          OR
        </span>
        <button
          onClick={() => signIn()}
          className="text-secondary uppercase border-[1px] border-solid border-secondary py-3.5 w-full rounded-lg"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default LoginFrorm;

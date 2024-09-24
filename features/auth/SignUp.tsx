"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "./useAuth";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export const SignUp = () => {
  const { signup, handleSigninWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    signup.mutateAsync(data);
  };

  return (
    <main className="flex h-screen w-screen items-center justify-center rounded-lg px-8 md:px-28">
      <section className="flex flex-row shadow-2xl">
        <section className="relative hidden min-h-[600px] w-[400px] md:flex">
          <Image
            src={"/images/manhaircut.webp"}
            fill
            priority
            objectFit="cover"
            alt={"FotoFamily"}
            className="bottom-0 brightness-50"
            objectPosition="top"
          />
        </section>

        <section className="flex flex-col gap-4 px-6 py-8 md:px-14">
          <section className="flex flex-col items-center gap-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex w-full flex-col items-center gap-6"
            >
              <p className="text-heading-s font-bold text-[#d2ac47] md:text-heading-s">
                Sign Up Your Account
              </p>
              <section className="flex w-full flex-col gap-4 text-text-s md:text-text-m">
                <div>
                  <label>
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Full Name is required",
                    })}
                    className="h-10 w-full rounded-md border pl-4"
                  />
                  {errors.name && (
                    <p className="text-text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="youremail@gmail.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Invalid email format",
                      },
                    })}
                    className="h-10 w-full rounded-md border p-2 pl-4"
                  />
                  {errors.email && (
                    <p className="text-text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[0-9\b]+$/,
                        message: "Invalid phone number format",
                      },
                    })}
                    className="h-10 w-full rounded-md border p-2 pl-4"
                  />
                  {errors.phone && (
                    <p className="text-text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label>
                    Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="h-10 w-full rounded-md border p-2 pl-4"
                  />
                  {errors.password && (
                    <p className="text-text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md border p-2 hover:bg-gradient-yellow"
                >
                  Sign up
                </button>
              </section>
            </form>
            <section className="flex w-full flex-col items-center gap-3 text-text-xs md:text-text-s">
              <p className="text-text-s">or sign up with</p>
              <button
                className="flex h-10 w-full items-center justify-center gap-2 rounded-md border text-text-s md:text-text-m"
                onClick={handleSigninWithGoogle}
              >
                <FcGoogle className="h-5 w-5 md:h-6 md:w-6" />
                Goolge
              </button>
              <section className="flex gap-1">
                <p>Already have an account?</p>
                <Link href="/log">
                  <p className="text-gradient-yellow hover:text-primary-yellow cursor-pointer underline hover:text-[#d2ac47]">
                    Sign in
                  </p>
                </Link>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

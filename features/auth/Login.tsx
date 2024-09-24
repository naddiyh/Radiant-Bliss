"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "./useAuth";
import { TLoginForm } from "./types";

export const Loginn = () => {
  const { login, handleSigninWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>();

  const onSubmit: SubmitHandler<TLoginForm> = (data) => console.log(data);
  return (
    <>
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

          <section className="flex flex-col justify-center gap-4 px-6 py-8 md:px-14">
            <section className="flex flex-col items-center">
              <form
                onSubmit={handleSubmit((values) => login.mutateAsync(values))}
                noValidate
                className="flex w-full flex-col items-center gap-10"
              >
                <p className="items-center text-center text-text-l font-bold text-[#d2ac47] md:text-heading-s">
                  Login to your Account
                </p>

                <section className="flex w-full flex-col gap-4 text-text-s md:text-text-m">
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
                          message: "Format email tidak benar",
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
                      Password<span className="text-red-500">*</span>
                    </label>

                    <input
                      placeholder="Kata Sandi"
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
                  <div className="flex flex-col py-4">
                    <button
                      type="submit"
                      className="w-full rounded-md border p-2 hover:bg-gradient-yellow hover:text-white"
                    >
                      Login
                    </button>
                    <div className="text-right">
                      <Link
                        href={"/forgotpassword"}
                        className="text-xs text-[#d2ac47]"
                      >
                        Forget Password?
                      </Link>
                    </div>
                  </div>
                </section>
              </form>
              <section className="flex w-full flex-col items-center justify-center gap-4">
                <p className="fpnt-semibold text-text-s">or login with</p>
                <button
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-md border text-text-s hover:bg-gradient-yellow hover:text-white md:text-text-m"
                  onClick={handleSigninWithGoogle}
                >
                  <FcGoogle className="h-5 w-5 md:h-6 md:w-6" />
                  Google
                </button>

                <div className="flex flex-col gap-1 text-center text-text-s">
                  <p className="text-[12px]">
                    Dont have an account?
                    <Link
                      href={"/signup"}
                      passHref
                      className="text-[#d2ac47] underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </section>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

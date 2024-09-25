"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Booking } from "@/features/booking";
import Image from "next/image";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { useAuth } from "@/features/auth/useAuth";

export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleOpen = () => {
    if (user) {
      setIsOpen(true);
    } else {
      router.push("/login");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="relative flex min-h-screen w-screen items-center justify-center gap-20 px-8 md:px-28">
      <Image
        src="/images/bg.png"
        layout="fill"
        priority
        alt="Man Haircut"
        className="-z-10 object-cover brightness-[.7]"
      />

      <h1 className="absolute top-48 flex w-full gap-36 px-[290px] font-bold">
        <span className="text-[100px] text-[#e2bb4e]">Radiant</span>
        <span className="z-30 text-[100px] text-white">Bliss </span>
      </h1>

      <div className="relative flex flex-col items-center justify-center pt-32">
        <Image
          src={"/images/man.png"}
          width={500}
          height={500}
          objectFit="cover"
          objectPosition="center"
          alt={"Man"}
          className=""
        />
      </div>
      <div className="absolute left-[130px] top-[450px] z-20 flex flex-col gap-6 text-white lg:w-[40%]">
        {/* <h1 className="text-6xl font-bold md:text-8xl">
          <span className="text-[#d2ac47]">Radiant</span> Bliss
        </h1> */}
        <span className="text-[20px] font-light italic">
          Beauty and Elegance Redefined
        </span>
        <p className="text-text-m font-thin">
          We are dedicated to enhancing your natural beauty with our exceptional
          services. Our team of experts is committed to providing an
          unforgettable experience tailored
        </p>

        <div className="flex flex-col gap-8 font-normal md:flex-row">
          <PrimaryButton fullwidth={false} onClick={handleOpen}>
            Booking
          </PrimaryButton>
          <PrimaryButton fullwidth={false} href="https://wa.me/628123456789">
            Contact us
          </PrimaryButton>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-full w-screen"
        style={{
          background:
            "linear-gradient(360deg, #050505 -6%, rgba(18, 16, 16, 0.00) 80%)",
        }}
      ></div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Booking onSubmitReserv={() => {}} onClose={handleClose} />
        </div>
      )}
    </section>
  );
};

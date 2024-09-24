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
    <section className="relative flex min-h-screen w-screen items-center px-8 md:px-28">
      <Image
        src="/images/manhaircut.webp"
        layout="fill"
        priority
        alt="Man Haircut"
        className="-z-10 object-cover brightness-[.4]"
      />

      <div className="z-20 flex flex-col gap-8 text-white lg:w-[55%]">
        <h1 className="text-6xl font-bold md:text-8xl">
          <span className="text-[#d2ac47]">Radiant</span> Bliss
        </h1>
        <span className="text-xl font-medium italic md:text-2xl">
          Beauty and Elegance Redefined
        </span>
        <p className="text-lg">
          We are dedicated to enhancing your natural beauty with our exceptional
          services. Our team of experts is committed to providing an
          unforgettable experience tailored to meet your individual needs.
        </p>

        <div className="flex flex-col gap-8 md:flex-row">
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

"use client";
import { useState, useEffect } from "react";
import { navLink } from "./navLink";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { PrimaryButton } from "@/components/atoms";
import { useAuth } from "@/features/auth/useAuth";
import Image from "next/image";
export const Navbar = ({ showBackground = true }) => {
  const { user, handleLogOut } = useAuth();
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScroll(scrollPosition > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed z-40 flex w-full items-center justify-between px-4 py-3 md:py-5 lg:px-28 ${
        (isScroll && showBackground) || showBackground === false
          ? "bg-black opacity-80"
          : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <Image src="/images/logoradiant.png" alt="" width={50} height={50} />
        <h1 className="text-heading-s font-bold text-white">RadiantBliss.</h1>
      </div>
      <div className="hidden items-center gap-2 md:flex md:gap-4">
        {navLink.map((items) => (
          <Link
            key={items.href}
            className="px-4 py-1 text-white transition duration-300 ease-in-out hover:text-[#d2ac47]"
            href={items.href}
          >
            {items.title}
          </Link>
        ))}
        {!user ? (
          <>
            <Link href="/signup" passHref>
              <PrimaryButton fullwidth={true}>Sign up</PrimaryButton>
            </Link>
            <Link href="/log" passHref>
              <PrimaryButton fullwidth={true}>Login</PrimaryButton>
            </Link>
          </>
        ) : (
          <PrimaryButton fullwidth={false} onClick={handleLogOut}>
            Log out
          </PrimaryButton>
        )}
      </div>
      <div className="flex items-center md:hidden">
        {!isMobileMenuOpen ? (
          <>
            <IoIosMenu
              className="h-8 w-8 cursor-pointer text-white"
              onClick={toggleMobileMenu}
            />
          </>
        ) : (
          <IoIosClose
            className="z-20 h-8 w-8 cursor-pointer text-white"
            onClick={closeMobileMenu}
          />
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-0 flex flex-col items-center gap-10 bg-black px-4 py-10 md:hidden">
          {navLink.map((items) => (
            <Link
              key={items.href}
              className="rounded px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-gradient-yellow hover:text-black"
              href={items.href}
            >
              {items.title}
            </Link>
          ))}
          {!user ? (
            <>
              <div className="flex flex-col gap-4 pt-2">
                <Link href="/signup" passHref>
                  <PrimaryButton fullwidth={true}>Sign up</PrimaryButton>
                </Link>
                <Link href="/log" passHref>
                  <PrimaryButton fullwidth={true}>Login</PrimaryButton>
                </Link>
              </div>
            </>
          ) : (
            <PrimaryButton fullwidth={true} onClick={handleLogOut}>
              Log out
            </PrimaryButton>
          )}
        </div>
      )}
    </nav>
  );
};

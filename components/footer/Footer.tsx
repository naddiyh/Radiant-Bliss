import Link from "next/link";
import { navLink } from "@/components/navbar";
export const Footer = () => {
  return (
    <footer className="relative bottom-0 flex h-[60px] w-screen items-center gap-2 bg-black px-8 py-10 text-white md:px-28">
      <div className="flex w-full">
        <h1 className="text-lg font-bold">RadiantBliss.</h1>

        <div className="text-m flex w-full justify-center gap-10">
          {navLink.map((index) => (
            <Link href={index.href} key={""}>
              {index.title}
            </Link>
          ))}
        </div>
      </div>

      <p className="absolute bottom-3 right-10 text-xs">
        ©RadiantBliss 2024. All right reserved
      </p>
    </footer>
  );
};

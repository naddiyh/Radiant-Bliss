import Image from "next/image";
export const About = () => {
  return (
    <main className="relative flex w-screen flex-col justify-center gap-8 bg-black px-8 py-10 pb-60 md:px-28">
      <div className="flex flex-col">
        <h1 className="text-right text-4xl font-bold text-[#d2ac47]">
          About Us!
        </h1>
        <p className="text-right italic text-white">
          Providing the best beauty services in a relaxed atmosphere
        </p>
      </div>

      <div className="flex h-[200px] justify-end bg-[#f3e8c9]">
        <p className="text-m border px-2 pt-4 text-center text-black md:pr-8 md:pt-10 md:text-right md:text-lg lg:w-1/2">
          Welcome to Radiant Bliss Salon! Our skilled stylists offer top hair
          and beauty services in a relaxing environment. We use high-quality
          products to ensure you look and feel your best. Come experience the
          SEA Salon difference.
        </p>
      </div>
      <div className="left-[200px] top-10 hidden h-[400px] w-[350px] bg-gradient-yellow shadow-2xl md:absolute md:block">
        <Image
          src="/images/haircut.webp"
          width={360}
          height={100}
          alt=""
          className="absolute left-7 top-6"
          objectFit="cover"
          objectPosition="top z-20"
        />
      </div>
    </main>
  );
};

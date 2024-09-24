import { Navbar } from "@/components/navbar";
import Providers from "../providers";
import { Footer } from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-root">
      <Providers>
        <Navbar />
        {children}
        <Footer />
      </Providers>
    </main>
  );
}

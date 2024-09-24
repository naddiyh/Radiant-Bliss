import { About } from "@/components/about/About";
import { HomePage } from "@/features/home";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomePage />
      <About />
    </main>
  );
}

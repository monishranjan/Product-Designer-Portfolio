import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16">
      <Hero />
      <SelectedWork />
    </main>
  );
}

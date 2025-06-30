import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/sections/home/hero-section";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
    </div>
  );
}

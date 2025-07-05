import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Section } from "@/sections";

export const Route = createFileRoute("/shoes")({
  component: ShoesPage,
});

function ShoesPage() {
  return (
    <Section>
      <PageHeader
        title="Shoes"
        subtitle="Step into elegance with our collection of formal shoes for every occasion."
      />
    </Section>
  );
}

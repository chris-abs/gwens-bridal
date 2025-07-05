import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Section } from "@/sections";

export const Route = createFileRoute("/bridal")({
  component: BridalPage,
});

function BridalPage() {
  return (
    <Section>
      <PageHeader
        title="Bridal Collection"
        subtitle="Discover our exquisite collection of wedding dresses, designed to make your special day unforgettable."
      />
    </Section>
  );
}

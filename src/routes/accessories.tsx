import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Section } from "@/sections";

export const Route = createFileRoute("/accessories")({
  component: AccessoriesPage,
});

function AccessoriesPage() {
  return (
    <Section>
      <PageHeader
        title="Accessories"
        subtitle="Complete your look with our beautiful selection of accessories."
      />
    </Section>
  );
}

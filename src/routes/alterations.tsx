import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Section } from "@/sections";

export const Route = createFileRoute("/alterations")({
  component: AlterationsPage,
});

function AlterationsPage() {
  return (
    <Section>
      <PageHeader
        title="Alteration Services"
        subtitle="Expert tailoring to ensure the perfect fit for your special
            occasion."
      />
    </Section>
  );
}

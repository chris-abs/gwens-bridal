import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Section } from "@/sections";

export const Route = createFileRoute("/prom")({
  component: PromPage,
});

function PromPage() {
  return (
    <Section>
      <PageHeader
        title="Prom Collection"
        subtitle="  Make your prom night magical with our stunning collection of formal
          dresses."
      />
    </Section>
  );
}

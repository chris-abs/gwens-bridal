import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Section } from "@/sections";

export const Route = createFileRoute("/children/flower-girl")({
  component: FlowerGirlPage,
});

function FlowerGirlPage() {
  return (
    <Section>
      <PageHeader
        title="Flower Girl Dresses"
        subtitle="  Make your little flower girl feel like a princess with our enchanting
        collection."
      />
    </Section>
  );
}

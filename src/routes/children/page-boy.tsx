import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Section } from "@/sections";

export const Route = createFileRoute("/children/page-boy")({
  component: PageBoyPage,
});

function PageBoyPage() {
  return (
    <Section>
      <PageHeader
        title="Page Boy Outfits"
        subtitle="Dapper and stylish outfits to make your page boy look his best."
      />
    </Section>
  );
}

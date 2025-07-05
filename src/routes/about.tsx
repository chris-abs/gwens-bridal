import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, Section } from "@/sections";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <Section>
      <PageHeader
        title="About Gwen's Bridal"
        subtitle="Every special moment deserves the perfect dress."
      />
    </Section>
  );
}

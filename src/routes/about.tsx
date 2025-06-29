import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          About Gwen's Bridal
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground text-lg mb-6">
            At Gwen's Bridal, we believe every special moment deserves the
            perfect dress. With years of experience in the bridal industry,
            we've helped countless brides, prom-goers, and families find their
            dream outfits.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-muted-foreground mb-6">
            Founded with a passion for creating magical moments, Gwen's Bridal
            has become a trusted name in formal wear. Our carefully curated
            collections feature the latest styles and timeless classics to suit
            every taste and budget.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Extensive bridal gown collection</li>
            <li>Stunning prom and formal dresses</li>
            <li>
              Children's formal wear including flower girl and page boy outfits
            </li>
            <li>Accessories and shoes to complete your look</li>
            <li>Professional alteration services</li>
            <li>Personalized styling consultations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Our Commitment
          </h2>
          <p className="text-muted-foreground">
            We're committed to providing exceptional service and ensuring you
            feel confident and beautiful on your special day. Our experienced
            team is here to guide you through every step of finding your perfect
            outfit.
          </p>
        </div>
      </div>
    </div>
  );
}

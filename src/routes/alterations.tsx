import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/alterations")({
  component: AlterationsPage,
});

function AlterationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
        Alteration Services
      </h1>

      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-muted-foreground text-center mb-12">
          Expert tailoring to ensure the perfect fit for your special occasion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Hemming and length adjustments</li>
              <li>• Taking in or letting out seams</li>
              <li>• Bustle installation</li>
              <li>• Strap adjustments</li>
              <li>• Neckline modifications</li>
              <li>• Emergency repairs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Over 20 years of experience</li>
              <li>• Skilled seamstresses</li>
              <li>• Quick turnaround times</li>
              <li>• Competitive pricing</li>
              <li>• Satisfaction guaranteed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

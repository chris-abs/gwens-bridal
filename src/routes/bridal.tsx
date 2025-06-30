import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bridal")({
  component: BridalPage,
});

function BridalPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Bridal Collection
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our exquisite collection of wedding dresses, designed to make
          your special day unforgettable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-muted rounded-lg aspect-[3/4] flex items-center justify-center"
          >
            <p className="text-muted-foreground">Wedding Dress {i}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          Why Choose Our Bridal Collection?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Designer Quality</h3>
            <p className="text-muted-foreground">
              Each dress is carefully selected from renowned designers to ensure
              the highest quality and craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Perfect Fit</h3>
            <p className="text-muted-foreground">
              Our expert alteration services guarantee a perfect fit that
              flatters your unique silhouette.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Personal Service</h3>
            <p className="text-muted-foreground">
              Enjoy one-on-one consultations with our experienced stylists to
              find your dream dress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

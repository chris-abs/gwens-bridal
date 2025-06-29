import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Welcome to Gwen's Bridal
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your premier destination for wedding dresses, prom gowns, and special
          occasion wear. Creating unforgettable moments with perfect fits and
          timeless elegance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Bridal Collection</h3>
            <p className="text-muted-foreground">
              Discover our stunning collection of wedding dresses for your
              special day.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Prom Dresses</h3>
            <p className="text-muted-foreground">
              Make your prom night magical with our beautiful selection of
              gowns.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Expert Alterations</h3>
            <p className="text-muted-foreground">
              Professional tailoring to ensure the perfect fit for every
              occasion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

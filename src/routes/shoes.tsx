import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shoes")({
  component: ShoesPage,
});

function ShoesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
        Shoes
      </h1>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Step into elegance with our collection of formal shoes for every
        occasion.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="bg-muted rounded-lg aspect-square flex items-center justify-center"
          >
            <p className="text-muted-foreground">Shoe {i}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

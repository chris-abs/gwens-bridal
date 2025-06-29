import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/children/flower-girl")({
  component: FlowerGirlPage,
});

function FlowerGirlPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
        Flower Girl Dresses
      </h1>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Make your little flower girl feel like a princess with our enchanting
        collection.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-muted rounded-lg aspect-[3/4] flex items-center justify-center"
          >
            <p className="text-muted-foreground">Flower Girl Dress {i}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

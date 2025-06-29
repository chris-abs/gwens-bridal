import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/prom")({
  component: PromPage,
});

function PromPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Prom Collection
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Make your prom night magical with our stunning collection of formal
          dresses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-muted rounded-lg aspect-[3/4] flex items-center justify-center"
          >
            <p className="text-muted-foreground">Prom Dress {i}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

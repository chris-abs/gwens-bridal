import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/children/page-boy")({
  component: PageBoyPage,
});

function PageBoyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
        Page Boy Outfits
      </h1>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Dapper and stylish outfits to make your page boy look his best.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-muted rounded-lg aspect-[3/4] flex items-center justify-center"
          >
            <p className="text-muted-foreground">Page Boy Outfit {i}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

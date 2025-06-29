import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/children/")({
  component: ChildrenPage,
});

function ChildrenPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
        Children's Formal Wear
      </h1>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Beautiful formal wear for the little ones in your wedding party.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <Link to="/children/flower-girl" className="group">
          <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center mb-4 group-hover:bg-muted/80 transition-colors">
            <p className="text-muted-foreground text-lg">Flower Girl Dresses</p>
          </div>
          <h2 className="text-2xl font-semibold text-center group-hover:text-primary transition-colors">
            Flower Girl
          </h2>
          <p className="text-muted-foreground text-center mt-2">
            Adorable dresses perfect for your little flower girl
          </p>
        </Link>

        <Link to="/children/page-boy" className="group">
          <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center mb-4 group-hover:bg-muted/80 transition-colors">
            <p className="text-muted-foreground text-lg">Page Boy Outfits</p>
          </div>
          <h2 className="text-2xl font-semibold text-center group-hover:text-primary transition-colors">
            Page Boy
          </h2>
          <p className="text-muted-foreground text-center mt-2">
            Smart and stylish outfits for your page boy
          </p>
        </Link>
      </div>
    </div>
  );
}

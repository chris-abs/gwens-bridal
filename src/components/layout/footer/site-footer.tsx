import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-amber-300 text-xl font-light mb-4">
              Gwen's Bridal
            </h3>
            <p className="text-white/60 font-light">
              Creating unforgettable moments with perfect fits and timeless
              elegance.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-light mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/bridal"
                className="block text-white/60 hover:text-amber-300 transition-colors"
              >
                Bridal Collection
              </Link>
              <Link
                to="/prom"
                className="block text-white/60 hover:text-amber-300 transition-colors"
              >
                Prom Dresses
              </Link>
              <Link
                to="/alterations"
                className="block text-white/60 hover:text-amber-300 transition-colors"
              >
                Alterations
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-light mb-4">Contact</h4>
            <div className="space-y-2 text-white/60 font-light">
              <p>123 Bridal Lane, Runcorn</p>
              <p>01928 123456</p>
              <p>info@gwensbridal.co.uk</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/40 font-light">
            &copy; 2025 Gwen's Bridal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

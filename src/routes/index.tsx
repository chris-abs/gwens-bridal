import { DressSpotlight } from "@/components/molecules/dress-spotlight";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-20 right-20 w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
      <div className="absolute top-40 left-10 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-500"></div>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-purple-300 font-light tracking-widest uppercase text-sm">
                Premium Bridal Collection
              </p>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light text-amber-300 leading-tight">
                Gwen's
                <br />
                <span className="text-white">Bridal</span>
                <br />
                <span className="text-purple-300">Elegance</span>
              </h1>
              <p className="text-xl text-white/70 font-light italic">by GWEN</p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <h3 className="text-white text-sm font-light mb-2">
                  Elegant bridal designs
                </h3>
                <p className="text-white/50 text-xs font-light">
                  combining traditional & contemporary styles for every bride.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-white text-sm font-light mb-2">
                  Personalized fittings
                </h3>
                <p className="text-white/50 text-xs font-light">
                  & custom tailoring for perfect, individualized bridal look.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-white text-sm font-light mb-2">
                  Premium quality fabrics
                </h3>
                <p className="text-white/50 text-xs font-light">
                  and expert craftsmanship, ensuring lasting beauty and comfort.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link
                to="/bridal"
                className="bg-amber-300 text-slate-900 px-8 py-3 font-light tracking-wide hover:bg-amber-400 transition-colors duration-300"
              >
                View Collection
              </Link>
              <Link
                to="/contact"
                className="border border-purple-300 text-purple-300 px-8 py-3 font-light tracking-wide hover:bg-purple-300 hover:text-slate-900 transition-all duration-300"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <DressSpotlight
                size="large"
                title="Featured Bridal Gown"
                borderColor="amber"
                className="mx-auto"
              />

              <div className="absolute -top-6 -left-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-amber-300"
                >
                  <path
                    d="M12 2L14.09 8.26L20 9L14.64 13.74L16.18 20.24L12 17L7.82 20.24L9.36 13.74L4 9L9.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 z-20">
              <DressSpotlight
                size="medium"
                title="Accessories"
                borderColor="purple"
              />
            </div>

            <div className="absolute top-16 -right-16 z-5">
              <DressSpotlight size="small" title="Veil" borderColor="white" />
            </div>

            <div className="absolute bottom-0 right-20 flex space-x-2 z-30">
              <button className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:border-amber-300 transition-colors">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="text-white/60"
                >
                  <path
                    d="M7.5 9L4.5 6L7.5 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:border-amber-300 transition-colors">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="text-white/60"
                >
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-light text-amber-300 leading-tight">
              New
              <br />
              <span className="text-white">Collection</span>
            </h2>
            <p className="text-white/60 font-light">
              Discover our latest arrivals featuring contemporary designs and
              timeless elegance for the modern bride.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0">
              <DressSpotlight
                size="medium"
                title="Majestic Grace Gown"
                subtitle="25"
                borderColor="amber"
              />
              <div className="text-center mt-4">
                <h3 className="text-amber-300 font-light text-lg">
                  Gowns Collection
                </h3>
                <p className="text-white/50 text-sm">
                  Sophisticated silhouettes designed for modern brides.
                </p>
              </div>
            </div>

            <div className="absolute top-16 left-0">
              <DressSpotlight
                size="large"
                title="Blissful Blossom Gown"
                subtitle="25"
                borderColor="purple"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <DressSpotlight
                size="small"
                title="Umbrellas"
                borderColor="white"
              />
              <div className="text-center mt-2">
                <p className="text-white/40 text-xs">
                  Stunning umbrellas with a lovely, graceful charm for all
                  occasions.
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 right-8">
              <DressSpotlight
                size="medium"
                title="Elegant Romance Dress"
                subtitle="21"
                borderColor="amber"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-amber-300 mb-8">
            Why Elegance Enclave
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-4">50</div>
              <p className="text-white/60 font-light">Stunning Bridal Gowns</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-4">120</div>
              <p className="text-white/60 font-light">Dress Collections</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-white mb-4">200k</div>
              <p className="text-white/60 font-light">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-amber-300 mb-4">
            Our Collections
          </h2>
          <p className="text-white/60 font-light">
            Discover the perfect dress for your special moment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/bridal" className="group">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 aspect-[3/4] mb-4">
              <div className="absolute inset-0 bg-slate-700 opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/60 font-light">
                  Bridal Collection
                </span>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-light text-white group-hover:text-amber-300 transition-colors">
              Wedding Gowns
            </h3>
            <p className="text-white/50 font-light text-sm">
              Timeless elegance for your special day
            </p>
          </Link>

          <Link to="/prom" className="group">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-900 to-slate-900 aspect-[3/4] mb-4">
              <div className="absolute inset-0 bg-slate-700 opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/60 font-light">
                  Prom Collection
                </span>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-light text-white group-hover:text-purple-300 transition-colors">
              Prom Dresses
            </h3>
            <p className="text-white/50 font-light text-sm">
              Make your prom night magical
            </p>
          </Link>

          <Link to="/children" className="group">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-900 to-slate-900 aspect-[3/4] mb-4">
              <div className="absolute inset-0 bg-slate-700 opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/60 font-light">
                  Children's Wear
                </span>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-light text-white group-hover:text-amber-300 transition-colors">
              Children's Formal
            </h3>
            <p className="text-white/50 font-light text-sm">
              Adorable outfits for little ones
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

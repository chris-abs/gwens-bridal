import { DressSpotlight } from "@/components/molecules/dress-spotlight";

export function HeroSection() {
  return (
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
        </div>

        <div className="relative">
          <div className="relative z-10">
            <DressSpotlight
              size="large"
              imageUrl="/src/assets/bride-with-wedding-dress.png"
              title="Majestic Grace Gown"
              subtitle="Elegant and timeless"
              borderColor="purple"
              onClick={() => console.log("Dress clicked!")}
            />
          </div>

          <div className="absolute -bottom-8 -right-8 z-20">
            <DressSpotlight
              size="medium"
              imageUrl="https://example.com/dress.jpg"
              title="Majestic Grace Gown"
              subtitle="Elegant and timeless"
              borderColor="white"
              onClick={() => console.log("Dress clicked!")}
            />
          </div>

          <div className="absolute top-16 -right-16 z-5">
            <DressSpotlight
              size="small"
              imageUrl="https://example.com/dress.jpg"
              title="Majestic Grace Gown"
              subtitle="Elegant and timeless"
              borderColor="amber"
              onClick={() => console.log("Dress clicked!")}
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

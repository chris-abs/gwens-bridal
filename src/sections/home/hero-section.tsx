import { DressSpotlight } from "@/components/molecules/dress-spotlight";

export function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center">
        <DressSpotlight
          src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop"
          alt="Elegant bridal portrait"
          size="small"
        >
          <div className="text-center">
            <p className="text-amber-200 text-sm font-medium">Timeless</p>
            <p className="text-amber-100/80 text-xs">Elegance</p>
          </div>
        </DressSpotlight>
        <DressSpotlight
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=700&fit=crop"
          alt="Beautiful wedding gown"
          size="medium"
        >
          <div className="text-center">
            <p className="text-amber-200 text-base font-medium">
              Sophisticated
            </p>
            <p className="text-amber-100/80 text-sm">Grace</p>
          </div>
        </DressSpotlight>
        <div className="relative">
          <div className="relative z-10">
            <DressSpotlight
              src="https://picsum.photos/400/600?random=40"
              alt="Elegant bridal portrait"
              size="large"
            >
              <div className="text-center">
                <p className="text-amber-200 text-sm font-medium">Timeless</p>
                <p className="text-amber-100/80 text-xs">Elegance</p>
              </div>
            </DressSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
}

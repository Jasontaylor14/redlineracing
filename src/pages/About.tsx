import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutRoad from "@/assets/about-road.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6">
              More Than <span className="text-gradient">Speed</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              It's connection. It's freedom. It's the feeling of escape.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-16 shadow-card">
            <img
              src={aboutRoad}
              alt="Car on open road"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* Story */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display font-bold">
                What is <span className="text-gradient">Redline Racing?</span>
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Redline Racing represents the pure love of cars — the feeling of connection
                between driver and machine, the excitement of the open road, and the freedom
                that driving brings.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                We're inspired by car culture, driving passion, and precision engineering.
                Our brand merges performance with style, creating apparel and experiences
                that celebrate the automotive lifestyle.
              </p>
            </div>

            <div className="border-t border-border pt-8 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-2">
                    Drive
                  </h3>
                  <p className="text-muted-foreground">
                    The connection between you and the machine
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-2">
                    Feel
                  </h3>
                  <p className="text-muted-foreground">
                    The emotion and passion of automotive culture
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-2">
                    Escape
                  </h3>
                  <p className="text-muted-foreground">
                    The freedom of the open road
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-12">
              <p className="text-2xl sm:text-3xl font-display font-light italic text-foreground/80">
                "Freedom lives at redline."
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

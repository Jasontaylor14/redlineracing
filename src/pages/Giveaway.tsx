import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Giveaway = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6">
              Win Your <span className="text-gradient">Dream Car</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every purchase enters you into our monthly car giveaways.
            </p>
          </div>

          {/* Countdown */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-lg p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold text-center mb-8">
                Next Drawing In:
              </h2>
              <div className="grid grid-cols-4 gap-4 text-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-background border border-border rounded-lg p-6">
                    <div className="text-4xl sm:text-5xl font-display font-bold text-primary mb-2">
                      {value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12">
              How It <span className="text-gradient">Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-display font-bold">1</span>
                </div>
                <h3 className="text-xl font-display font-bold">Shop</h3>
                <p className="text-muted-foreground">
                  Browse our premium automotive apparel and accessories
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-display font-bold">2</span>
                </div>
                <h3 className="text-xl font-display font-bold">Earn Entries</h3>
                <p className="text-muted-foreground">
                  Every $1 spent = 1 automatic entry into the giveaway
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-display font-bold">3</span>
                </div>
                <h3 className="text-xl font-display font-bold">Win</h3>
                <p className="text-muted-foreground">
                  One lucky winner takes home their dream car each month
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-primary p-12 rounded-lg">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Start Earning Entries Today
            </h2>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Legal Disclaimer */}
          <div className="max-w-4xl mx-auto mt-16 p-6 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              *No purchase necessary. See official rules for details. Giveaway open to legal
              residents of the United States, 18 years or older. Void where prohibited.
              Winners are responsible for all applicable taxes and fees.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Giveaway;

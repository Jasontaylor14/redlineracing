import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-dashboard.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";
import productHat from "@/assets/product-hat.jpg";

const Index = () => {
  const featuredProducts = [
    {
      image: productHoodie,
      name: "Redline Hoodie",
      price: "$65.00",
      category: "NEW",
    },
    {
      image: productTshirt,
      name: "Performance Tee",
      price: "$35.00",
      category: "BEST SELLER",
    },
    {
      image: productHat,
      name: "Snapback Cap",
      price: "$30.00",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold mb-6 glow-effect">
            <span className="text-gradient">REDLINE</span>
            <br />
            RACING
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-foreground/90">
            For those who live past the limit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/shop">
              <Button variant="hero" size="lg">
                Shop Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/giveaway">
              <Button variant="outline" size="lg">
                Enter Giveaway
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium automotive apparel for true enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Giveaway Teaser */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6" />
            <span className="text-sm font-display tracking-wide uppercase">
              Next Giveaway
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Win Your Dream Car
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Every $1 spent = 1 entry. The more you shop, the better your chances.
          </p>
          <Link to="/giveaway">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Join the <span className="text-gradient">Redline Society</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Get exclusive drops, giveaway updates, and car culture content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-card border-border h-12"
            />
            <Button variant="default" size="lg" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

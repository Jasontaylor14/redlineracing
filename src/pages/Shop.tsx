import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";
import productHat from "@/assets/product-hat.jpg";

const Shop = () => {
  const products = [
    {
      image: productHoodie,
      name: "Redline Hoodie",
      price: "$65.00",
      category: "Hoodies",
    },
    {
      image: productTshirt,
      name: "Performance Tee",
      price: "$35.00",
      category: "Shirts",
    },
    {
      image: productHat,
      name: "Snapback Cap",
      price: "$30.00",
      category: "Headwear",
    },
    {
      image: productHoodie,
      name: "Track Hoodie",
      price: "$70.00",
      category: "Hoodies",
    },
    {
      image: productTshirt,
      name: "Drift Tee",
      price: "$35.00",
      category: "Shirts",
    },
    {
      image: productHat,
      name: "Classic Beanie",
      price: "$25.00",
      category: "Headwear",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-display font-bold mb-4">
              <span className="text-gradient">Shop</span> Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium automotive apparel designed for the road and the culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;

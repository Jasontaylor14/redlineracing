import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category?: string;
}

const ProductCard = ({ image, name, price, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer shadow-card hover:shadow-glow">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {category && (
          <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-display tracking-wide px-3 py-1 rounded">
            {category}
          </span>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-primary font-display text-xl">{price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

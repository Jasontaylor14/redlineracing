import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold tracking-wider text-gradient">
              REDLINE
            </h3>
            <p className="text-sm text-muted-foreground">
              For those who live past the limit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/shop" className="hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary transition-colors">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary transition-colors">
                  Shirts
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary transition-colors">
                  Headwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/giveaway" className="hover:text-primary transition-colors">
                  Giveaways
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="space-y-4">
              <a
                href="https://instagram.com/redlineracing.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@redlineracing.co</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Redline Racing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Instagram, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Questions about our products or giveaways? We're here to help.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-display mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-display mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-display mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    required
                    className="bg-card border-border resize-none"
                  />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-display font-bold mb-4">Connect With Us</h3>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/redlineracing.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <Instagram className="w-6 h-6" />
                    <div>
                      <div className="font-display font-semibold">Instagram</div>
                      <div className="text-sm text-muted-foreground">@redlineracing.co</div>
                    </div>
                  </a>
                  <div className="flex items-center space-x-3 text-foreground/80">
                    <Mail className="w-6 h-6" />
                    <div>
                      <div className="font-display font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">
                        hello@redlineracing.co
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-card">
                <h3 className="text-xl font-display font-bold mb-4">FAQ</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-display font-semibold mb-1">Shipping</p>
                    <p className="text-muted-foreground">
                      Free shipping on all orders over $75
                    </p>
                  </div>
                  <div>
                    <p className="font-display font-semibold mb-1">Returns</p>
                    <p className="text-muted-foreground">
                      30-day return policy on all products
                    </p>
                  </div>
                  <div>
                    <p className="font-display font-semibold mb-1">Giveaway Rules</p>
                    <p className="text-muted-foreground">
                      Every $1 spent = 1 automatic entry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

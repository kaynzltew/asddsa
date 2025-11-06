import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Download, Menu, X, Key } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import StatusIndicator from "./StatusIndicator";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg shadow-neon-purple/5"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <h1
                className="text-2xl font-bold cursor-pointer"
                style={{
                  background:
                    "linear-gradient(to right, #a855f7, #ec4899, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                data-testid="link-home"
              >
                KRNL
              </h1>
              <span className="text-xs text-neon-purple/60 font-mono">
                eukrnl.com
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                data-testid="link-nav-features"
              >
                {t.nav.features}
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                data-testid="link-nav-download"
              >
                {t.nav.download}
              </button>
              <button
                onClick={() => scrollToSection("updates")}
                className="text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                data-testid="link-nav-updates"
              >
                {t.nav.updates}
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                data-testid="link-nav-gallery"
              >
                {t.nav.gallery}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <StatusIndicator />
            <LanguageSwitcher />
            <Button
              size="sm"
              variant="outline"
              className="border-neon-purple/50 hover:bg-neon-purple/10 text-neon-purple"
              data-testid="button-nav-get-key"
              onClick={() => setLocation("/key")}
            >
              <Key className="h-4 w-4 mr-2" />
              {t.nav.getKey}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-neon-purple/30"
              data-testid="button-nav-download"
              onClick={() => scrollToSection("download")}
            >
              <Download className="h-4 w-4 mr-2" />
              {t.nav.download}
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <StatusIndicator />
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                data-testid="link-mobile-features"
              >
                {t.nav.features}
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="text-left text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                data-testid="link-mobile-download"
              >
                {t.nav.download}
              </button>
              <button
                onClick={() => scrollToSection("updates")}
                className="text-left text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                data-testid="link-mobile-updates"
              >
                {t.nav.updates}
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                data-testid="link-mobile-gallery"
              >
                {t.nav.gallery}
              </button>
              <div className="flex flex-col gap-4 pt-2">
                <LanguageSwitcher />
                <Button
                  size="sm"
                  variant="outline"
                  className="border-neon-purple/50 hover:bg-neon-purple/10 text-neon-purple justify-start"
                  onClick={() => {
                    setLocation("/key");
                    setIsMobileMenuOpen(false);
                  }}
                  data-testid="button-mobile-get-key"
                >
                  <Key className="h-4 w-4 mr-2" />
                  {t.nav.getKey}
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 text-white font-semibold justify-start"
                  onClick={() => scrollToSection("download")}
                  data-testid="button-mobile-download"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t.nav.download}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

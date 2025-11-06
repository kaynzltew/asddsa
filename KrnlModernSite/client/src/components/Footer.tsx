import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                background:
                  "linear-gradient(to right, #a855f7, #ec4899, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              KRNL
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                  data-testid="link-features"
                >
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                  data-testid="link-download"
                >
                  {t.nav.download}
                </a>
              </li>
              <li>
                <a
                  href="#updates"
                  className="text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                  data-testid="link-updates"
                >
                  {t.nav.updates}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                  data-testid="link-gallery"
                >
                  {t.nav.gallery}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright}
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

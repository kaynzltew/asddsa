import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-background to-pink-900/20" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 px-4 py-24 text-center">
        <div className="mb-8 inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1
            className="text-7xl md:text-9xl font-bold mb-4 tracking-tight"
            style={{
              background:
                "linear-gradient(to right, #a855f7, #ec4899, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 80px rgba(168, 85, 247, 0.5)",
            }}
          >
            {t.hero.title}
          </h1>
          <div
            className="h-1 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-violet rounded-full"
            style={{
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
            }}
          />
        </div>

        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          {t.hero.subtitle}
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm border-neon-violet/50 text-neon-violet"
          >
            <Shield className="h-4 w-4 mr-2" />
            {t.hero.highStability}
          </Badge>
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm border-neon-purple/50 text-neon-purple"
          >
            <Code className="h-4 w-4 mr-2" />
            {t.hero.uncSupport}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 text-white font-semibold px-8 shadow-lg shadow-neon-purple/30 transition-all hover:shadow-neon-purple/50 hover:scale-105"
            data-testid="button-download-now"
          >
            <Download className="h-5 w-5 mr-2" />
            {t.hero.downloadNow}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-neon-purple/50 hover:bg-neon-purple/10 transition-all hover:scale-105"
            data-testid="button-view-features"
          >
            {t.hero.viewFeatures}
          </Button>
        </div>

        <div className="mt-16 flex gap-8 justify-center items-center text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-neon-purple animate-pulse"
              style={{
                boxShadow: "0 0 10px rgba(168, 85, 247, 0.8)",
              }}
            />
            Windows
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-neon-pink animate-pulse"
              style={{
                boxShadow: "0 0 10px rgba(236, 72, 153, 0.8)",
                animationDelay: "0.2s",
              }}
            />
            Android
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-neon-violet animate-pulse"
              style={{
                boxShadow: "0 0 10px rgba(139, 92, 246, 0.8)",
                animationDelay: "0.4s",
              }}
            />
            iOS
          </div>
        </div>
      </div>
    </section>
  );
}

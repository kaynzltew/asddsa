import { Card } from "@/components/ui/card";
import {
  Code2,
  Shield,
  Zap,
  Layers,
  Terminal,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const featureIcons = [Code2, Shield, Terminal, Smartphone, Zap, Layers];
const featureColors = [
  "neon-purple",
  "neon-pink",
  "neon-violet",
  "neon-purple",
  "neon-pink",
  "neon-violet",
];

export default function FeaturesGrid() {
  const { t } = useLanguage();

  const features = [
    t.features.scriptEngine,
    t.features.uncSupport,
    t.features.scriptLibrary,
    t.features.crossPlatform,
    t.features.stability,
    t.features.level8,
  ];

  return (
    <section className="py-24 px-4" id="features">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            const color = featureColors[index];
            return (
              <Card
                key={index}
                className="p-6 bg-card border-card-border hover-elevate transition-all duration-500 group hover:border-neon-purple/50 hover:shadow-lg hover:shadow-neon-purple/20"
                data-testid={`card-feature-${index}`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${
                      color === "neon-purple"
                        ? "#a855f7"
                        : color === "neon-pink"
                        ? "#ec4899"
                        : "#8b5cf6"
                    }20, ${
                      color === "neon-purple"
                        ? "#a855f7"
                        : color === "neon-pink"
                        ? "#ec4899"
                        : "#8b5cf6"
                    }05)`,
                    boxShadow: `0 0 20px ${
                      color === "neon-purple"
                        ? "#a855f7"
                        : color === "neon-pink"
                        ? "#ec4899"
                        : "#8b5cf6"
                    }30`,
                  }}
                >
                  <Icon
                    className="h-6 w-6 transition-all duration-500 group-hover:rotate-6"
                    style={{
                      color:
                        color === "neon-purple"
                          ? "#a855f7"
                          : color === "neon-pink"
                          ? "#ec4899"
                          : "#8b5cf6",
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-purple transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

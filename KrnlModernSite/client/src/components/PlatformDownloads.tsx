import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Clock, Monitor } from "lucide-react";
import { SiAndroid, SiApple } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

const platforms = [
  {
    name: "Windows",
    icon: Monitor,
    version: "v2.698",
    color: "neon-purple",
    gradient: "from-neon-purple to-purple-600",
    available: true,
  },
  {
    name: "Android",
    icon: SiAndroid,
    version: "v2.697",
    color: "neon-pink",
    gradient: "from-neon-pink to-pink-600",
    available: false,
  },
  {
    name: "iOS",
    icon: SiApple,
    version: "v2.697",
    color: "neon-violet",
    gradient: "from-neon-violet to-violet-600",
    available: false,
  },
];

export default function PlatformDownloads() {
  const { t } = useLanguage();

  const handleDownload = (platform: string) => {
    console.log(`Downloading KRNL for ${platform}`);
  };

  return (
    <section className="py-24 px-4 bg-card/30" id="download">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.download.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.download.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card border-card-border hover-elevate transition-all duration-500 hover:border-neon-purple/50 hover:shadow-lg hover:shadow-neon-purple/20"
                data-testid={`card-platform-${platform.name.toLowerCase()}`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-xl mx-auto mb-6 flex items-center justify-center transition-all duration-500 hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${
                        platform.color === "neon-purple"
                          ? "#a855f7"
                          : platform.color === "neon-pink"
                          ? "#ec4899"
                          : "#8b5cf6"
                      }25, ${
                        platform.color === "neon-purple"
                          ? "#a855f7"
                          : platform.color === "neon-pink"
                          ? "#ec4899"
                          : "#8b5cf6"
                      }05)`,
                      boxShadow: `0 0 30px ${
                        platform.color === "neon-purple"
                          ? "#a855f7"
                          : platform.color === "neon-pink"
                          ? "#ec4899"
                          : "#8b5cf6"
                      }30`,
                    }}
                  >
                    <Icon
                      className="h-10 w-10"
                      style={{
                        color:
                          platform.color === "neon-purple"
                            ? "#a855f7"
                            : platform.color === "neon-pink"
                            ? "#ec4899"
                            : "#8b5cf6",
                      }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {platform.version}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {t.download.requirements[
                      platform.name.toLowerCase() as keyof typeof t.download.requirements
                    ]}
                  </p>

                  {platform.available ? (
                    <Button
                      className={`w-full bg-gradient-to-r ${platform.gradient} hover:opacity-90 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-neon-purple/30`}
                      onClick={() => handleDownload(platform.name)}
                      data-testid={`button-download-${platform.name.toLowerCase()}`}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {t.download.download}
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-muted/50 text-muted-foreground font-semibold cursor-not-allowed"
                      disabled
                      data-testid={`button-coming-soon-${platform.name.toLowerCase()}`}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      {t.download.comingSoon}
                    </Button>
                  )}
                </div>
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

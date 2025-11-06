import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import executorImage from "@assets/generated_images/KRNL_script_executor_interface_3e45dc34.png";
import libraryImage from "@assets/generated_images/Script_library_interface_view_da675e44.png";
import settingsImage from "@assets/generated_images/Settings_panel_interface_81e51550.png";

const screenshots = [
  {
    image: executorImage,
    title: "Script Executor Interface",
    description: "Clean and modern code editor with syntax highlighting",
  },
  {
    image: libraryImage,
    title: "Built-in Script Library",
    description: "Browse and execute thousands of pre-loaded scripts",
  },
  {
    image: settingsImage,
    title: "Advanced Settings",
    description: "Customize your experience with powerful options",
  },
];

export default function ScreenshotGallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-card/30" id="gallery">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-card-border hover-elevate transition-all duration-500 cursor-pointer group hover:border-neon-purple/50 hover:shadow-lg hover:shadow-neon-purple/20"
              onClick={() => setSelectedImage(index)}
              data-testid={`card-screenshot-${index}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-full bg-neon-purple/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
                    }}
                  >
                    <ZoomIn className="h-6 w-6 text-neon-purple" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-neon-purple transition-colors duration-300">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {screenshot.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl p-0 bg-background/95 backdrop-blur-lg border-neon-purple/30">
          {selectedImage !== null && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-all hover:scale-110"
                data-testid="button-close-screenshot"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={screenshots[selectedImage].image}
                alt={screenshots[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-neon-purple">
                  {screenshots[selectedImage].title}
                </h3>
                <p className="text-muted-foreground">
                  {screenshots[selectedImage].description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

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

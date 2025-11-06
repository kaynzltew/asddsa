import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const updates = [
  {
    title: "Enhanced Script Library with 500+ New Scripts",
    date: "November 22, 2024",
    description:
      "Massive update to our built-in script library featuring community favorites and new game-specific scripts.",
    fullContent:
      "We're excited to announce a major expansion to our built-in script library! This update includes over 500 new scripts carefully curated from community submissions and our development team. The new scripts cover popular games like Blox Fruits, Pet Simulator X, Arsenal, and many more. We've also improved the search functionality with better categorization and filtering options, making it easier than ever to find the perfect script for your needs.",
    isNew: true,
  },
  {
    title: "Improved Stability & Performance Optimization",
    date: "November 18, 2024",
    description:
      "Major performance improvements reducing memory usage by 40% and enhancing overall execution speed.",
    fullContent:
      "This update brings significant performance improvements to KRNL. We've optimized the core execution engine, resulting in a 40% reduction in memory usage and faster script execution times. The anti-crash system has been enhanced with better error handling and recovery mechanisms. Users should notice smoother performance, especially when running complex scripts or multiple scripts simultaneously. These optimizations also improve battery life on mobile devices.",
    isNew: true,
  },
  {
    title: "Advanced Debugging Tools Released",
    date: "November 15, 2024",
    description:
      "Professional debugging suite with real-time error detection and script optimization suggestions.",
    fullContent:
      "KRNL now includes a comprehensive debugging suite designed for both beginners and advanced users. The new tools provide real-time error detection with detailed error messages and stack traces. Script optimization suggestions help you improve performance and reduce potential issues. The debugger includes breakpoint support, variable inspection, and step-by-step execution. These tools make it easier to develop and troubleshoot your own scripts or modify existing ones.",
    isNew: false,
  },
];

export default function UpdatesSection() {
  const { t } = useLanguage();
  const [selectedUpdate, setSelectedUpdate] = useState<number | null>(null);

  return (
    <section className="py-24 px-4" id="updates">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.updates.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.updates.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-card-border hover-elevate transition-all duration-500 group hover:border-neon-purple/50 hover:shadow-lg hover:shadow-neon-purple/20"
              data-testid={`card-update-${index}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  {update.isNew && (
                    <Badge
                      className="bg-neon-purple/20 text-neon-purple border-neon-purple/50 animate-pulse"
                      variant="outline"
                    >
                      {t.updates.newUpdate}
                    </Badge>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground ml-auto">
                    <Calendar className="h-4 w-4" />
                    {update.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-neon-purple transition-colors duration-300">
                  {update.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {update.description}
                </p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-neon-purple hover:text-neon-pink p-0 transition-all duration-300"
                  data-testid={`button-read-more-${index}`}
                  onClick={() => setSelectedUpdate(index)}
                >
                  {t.updates.readMore}
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedUpdate !== null}
        onOpenChange={() => setSelectedUpdate(null)}
      >
        <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-lg border-neon-purple/30">
          {selectedUpdate !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-neon-purple">
                  {updates[selectedUpdate].title}
                </DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <Calendar className="h-4 w-4" />
                  {updates[selectedUpdate].date}
                </div>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-foreground leading-relaxed">
                  {updates[selectedUpdate].fullContent}
                </p>
              </div>
            </>
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

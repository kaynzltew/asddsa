import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import PlatformDownloads from "@/components/PlatformDownloads";
import UpdatesSection from "@/components/UpdatesSection";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <PlatformDownloads />
        <UpdatesSection />
        <ScreenshotGallery />
      </main>
      <Footer />
    </div>
  );
}

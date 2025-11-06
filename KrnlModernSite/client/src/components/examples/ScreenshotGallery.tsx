import ScreenshotGallery from "../ScreenshotGallery";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function ScreenshotGalleryExample() {
  return (
    <LanguageProvider>
      <ScreenshotGallery />
    </LanguageProvider>
  );
}

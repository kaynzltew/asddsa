import PlatformDownloads from "../PlatformDownloads";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function PlatformDownloadsExample() {
  return (
    <LanguageProvider>
      <PlatformDownloads />
    </LanguageProvider>
  );
}

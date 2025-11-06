import FeaturesGrid from "../FeaturesGrid";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function FeaturesGridExample() {
  return (
    <LanguageProvider>
      <FeaturesGrid />
    </LanguageProvider>
  );
}

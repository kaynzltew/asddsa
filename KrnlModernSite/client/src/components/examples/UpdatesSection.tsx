import UpdatesSection from "../UpdatesSection";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function UpdatesSectionExample() {
  return (
    <LanguageProvider>
      <UpdatesSection />
    </LanguageProvider>
  );
}

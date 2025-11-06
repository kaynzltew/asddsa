import LanguageSwitcher from "../LanguageSwitcher";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function LanguageSwitcherExample() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
    </LanguageProvider>
  );
}

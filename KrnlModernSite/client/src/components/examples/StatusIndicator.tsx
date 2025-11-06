import StatusIndicator from "../StatusIndicator";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function StatusIndicatorExample() {
  return (
    <LanguageProvider>
      <StatusIndicator />
    </LanguageProvider>
  );
}

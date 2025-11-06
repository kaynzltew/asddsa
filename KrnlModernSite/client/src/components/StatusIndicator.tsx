import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StatusIndicator() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/30 rounded-lg backdrop-blur-sm animate-pulse">
      <CheckCircle className="h-4 w-4 text-neon-purple" />
      <span className="text-sm font-medium text-neon-purple">
        {t.status.operational}
      </span>
    </div>
  );
}

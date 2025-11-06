import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Key,
  Shield,
  Copy,
  Check,
  Loader2,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

function generateKey(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let key = "";
  for (let i = 0; i < 12; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
    if ((i + 1) % 4 === 0 && i < 11) key += "-";
  }
  return key;
}

export default function KeySystem() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);
  const [accessKey, setAccessKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleVerification = async () => {
    setIsVerifying(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setAccessKey(generateKey());
    setIsVerifying(false);
  };

  const copyToClipboard = () => {
    if (accessKey) {
      navigator.clipboard.writeText(accessKey.replace(/-/g, ""));
      setCopied(true);
      toast({
        title: t.keySystem.keyCopied,
        description: "Your key has been copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-background to-pink-900/20" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container relative z-10 px-4 py-24 max-w-4xl">
          <Button
            variant="ghost"
            className="mb-8 text-neon-purple hover:text-neon-pink"
            onClick={() => setLocation("/")}
            data-testid="button-back-home"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-lg border-neon-purple/30 shadow-2xl shadow-neon-purple/20">
            <div className="text-center mb-8">
              <div
                className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink mx-auto mb-6 flex items-center justify-center"
                style={{
                  boxShadow: "0 0 40px rgba(168, 85, 247, 0.5)",
                }}
              >
                <Key className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                {t.keySystem.title}
              </h1>
              <p className="text-muted-foreground text-lg">
                {t.keySystem.description}
              </p>
            </div>

            {!accessKey ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-neon-purple/10 rounded-lg border border-neon-purple/30 text-center">
                    <Shield className="h-6 w-6 text-neon-purple mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {t.keySystem.step1}
                    </p>
                  </div>
                  <div className="p-4 bg-neon-pink/10 rounded-lg border border-neon-pink/30 text-center">
                    <Key className="h-6 w-6 text-neon-pink mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {t.keySystem.step2}
                    </p>
                  </div>
                  <div className="p-4 bg-neon-violet/10 rounded-lg border border-neon-violet/30 text-center">
                    <Lock className="h-6 w-6 text-neon-violet mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {t.keySystem.step3}
                    </p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 text-white font-semibold text-lg py-6 transition-all hover:scale-105 shadow-lg shadow-neon-purple/40"
                  onClick={handleVerification}
                  disabled={isVerifying}
                  data-testid="button-verify"
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      {t.keySystem.verifying}
                    </>
                  ) : (
                    <>
                      <Shield className="h-5 w-5 mr-2" />
                      {t.keySystem.verify}
                    </>
                  )}
                </Button>
              </>
            ) : (
              <div className="space-y-6">
                <div className="p-6 bg-neon-purple/10 rounded-lg border border-neon-purple/30">
                  <p className="text-sm text-muted-foreground mb-3">
                    {t.keySystem.yourKey}
                  </p>
                  <div className="flex items-center gap-2">
                    <Input
                      value={accessKey}
                      readOnly
                      className="font-mono text-xl font-bold text-neon-purple border-neon-purple/50 bg-background/50"
                      data-testid="input-access-key"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-neon-purple/50 hover:bg-neon-purple/10 transition-all"
                      onClick={copyToClipboard}
                      data-testid="button-copy-key"
                    >
                      {copied ? (
                        <Check className="h-5 w-5 text-neon-purple" />
                      ) : (
                        <Copy className="h-5 w-5 text-neon-purple" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-card/50 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">
                    Keep this key safe. You'll need it to access KRNL. This key
                    is unique to you and should not be shared with others.
                  </p>
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-neon-purple/50 hover:bg-neon-purple/10 text-neon-purple"
                  onClick={() => setLocation("/")}
                  data-testid="button-return-home"
                >
                  Return to Home
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

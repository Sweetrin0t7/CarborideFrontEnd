import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Clock } from "lucide-react";

const EncontrarMotorista = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        title="Pronto para sair? Encontre seu motorista."
        subtitle="Seu trajeto, do jeito que você merece."
        buttonText="Encontrar Motorista"
        onButtonClick={() => navigate("/cadastro")}
      />

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-primary/20 hover:border-primary transition-colors">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Encontre Motoristas</h3>
              <p className="text-muted-foreground">
                Motoristas verificados prontos para te levar ao seu destino
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary transition-colors">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Rápido e Seguro</h3>
              <p className="text-muted-foreground">
                Chegue ao seu destino com segurança e no menor tempo possível
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <AppDownloadSection />
      <Footer />
    </div>
  );
};

export default EncontrarMotorista;

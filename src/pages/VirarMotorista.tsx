import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users } from "lucide-react";

const VirarMotorista = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection
        title="Pronto para virar Motorista?"
        subtitle="Seja próximo passageiro a um clique de distância."
        buttonText="Cadastrar-se"
        onButtonClick={() => navigate("/cadastro")}
      />

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-primary/20 hover:border-primary transition-colors">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Ganhe Dinheiro</h3>
              <p className="text-muted-foreground">
                Defina seus próprios horários e ganhe no seu tempo livre
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary transition-colors">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Conecte-se</h3>
              <p className="text-muted-foreground">
                Faça parte de uma comunidade de motoristas profissionais
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

export default VirarMotorista;

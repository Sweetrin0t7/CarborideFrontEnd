import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { User, Bike } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="text-center space-y-12 max-w-4xl">
        <div className="space-y-4">
          <Logo />
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Bem-vindo ao CARBORIDE
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha como deseja continuar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            className="cursor-pointer border-2 border-border hover:border-primary transition-all hover:shadow-lg"
            onClick={() => navigate("/encontrar-motorista")}
          >
            <CardContent className="p-8 space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <User className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Encontrar Motorista</h3>
              <p className="text-muted-foreground">
                Precisa de uma carona? Encontre motoristas disponíveis na sua região
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/encontrar-motorista");
                }}
              >
                Sou Passageiro
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer border-2 border-border hover:border-primary transition-all hover:shadow-lg"
            onClick={() => navigate("/virar-motorista")}
          >
            <CardContent className="p-8 space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Bike className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Virar Motorista</h3>
              <p className="text-muted-foreground">
                Ganhe dinheiro dirigindo! Cadastre-se como motorista parceiro
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/virar-motorista");
                }}
              >
                Sou Motorista
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Já tenho conta - Entrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

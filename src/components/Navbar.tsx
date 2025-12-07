import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 
            className="text-2xl md:text-3xl font-bold text-primary cursor-pointer"
            onClick={() => navigate("/")}
          >
            CARBORIDE
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate("/")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              Serviços
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              Sobre nós
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Entrar
            </Button>
            <Button
              onClick={() => navigate("/cadastro")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Cadastrar-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button
              onClick={() => navigate("/")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Serviços
            </button>
            <button className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Sobre nós
            </button>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => navigate("/login")}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Entrar
              </Button>
              <Button
                onClick={() => navigate("/cadastro")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Cadastrar-se
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import AuthInput from "@/components/AuthInput";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cpfTelefone: "",
    senha: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Login realizado com sucesso!");
    // Redireciona para página de escolha entre passageiro/motorista
    navigate("/encontrar-motorista");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-6">
          <Logo />
          <h2 className="text-2xl font-semibold text-foreground">Entrar</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthInput
            type="text"
            placeholder="CPF ou telefone"
            value={formData.cpfTelefone}
            onChange={(e) => setFormData({ ...formData, cpfTelefone: e.target.value })}
            required
          />
          
          <AuthInput
            type="password"
            placeholder="Senha"
            value={formData.senha}
            onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
            required
          />

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            Entrar
          </Button>
        </form>

        <div className="text-center space-y-2">
          <p className="text-sm text-foreground">
            Entrar sem conta?{" "}
            <button
              onClick={() => navigate("/")}
              className="text-primary hover:underline font-medium"
            >
              Entrar
            </button>
          </p>
          <p className="text-sm text-foreground">
            Não possui uma conta?{" "}
            <button
              onClick={() => navigate("/cadastro")}
              className="text-primary hover:underline font-medium"
            >
              Cadastrar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

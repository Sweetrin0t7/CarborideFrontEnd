import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import AuthInput from "@/components/AuthInput";
import { toast } from "sonner";

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    cpf: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.senha !== formData.confirmarSenha) {
      toast.error("As senhas não coincidem");
      return;
    }

    toast.success("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-6">
          <Logo />
          <h2 className="text-2xl font-semibold text-foreground">Cadastrar</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthInput
            type="text"
            placeholder="Nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            required
          />
          
          <AuthInput
            type="tel"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            required
          />
          
          <AuthInput
            type="text"
            placeholder="CPF"
            value={formData.cpf}
            onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
            required
          />
          
          <AuthInput
            type="password"
            placeholder="Senha"
            value={formData.senha}
            onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
            required
          />
          
          <AuthInput
            type="password"
            placeholder="Repetir a senha"
            value={formData.confirmarSenha}
            onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
            required
          />

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            Cadastrar
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-foreground">
            Já tem uma conta?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-primary hover:underline font-medium"
            >
              Entrar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

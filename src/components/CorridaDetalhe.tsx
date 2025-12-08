import { Share2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import RideDriverCard from "./CorridaDetalheCard";

const CorridaDetalhe = () => {
  return (
    <div className="space-y-4 px-4 pb-6">
      <RideDriverCard />

      {/* Price */}
      <div className="pt-2">
        <p className="text-2xl font-bold text-foreground">R$:15,80</p>
      </div>

      {/* Payment Method */}
      <div className="flex items-center justify-between py-2">
        <div>
          <p className="text-xs text-muted-foreground">Forma de pagamento:</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-6 h-4 bg-gradient-to-r from-red-500 to-yellow-500 rounded-sm" />
            <span className="text-sm text-foreground">Mastercard crédito</span>
          </div>
        </div>
        <Button variant="link" className="text-primary p-0 h-auto font-normal">
          Alterar
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        <Button
          variant="outline"
          className="w-full h-12 border-primary text-primary hover:bg-primary/5 font-medium"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Compartilhar corrida
        </Button>
        <Button
          variant="ghost"
          className="w-full h-12 text-destructive hover:text-destructive hover:bg-destructive/5 font-medium"
        >
          <X className="w-4 h-4 mr-2" />
          Cancelar corrida
        </Button>
      </div>
    </div>
  );
};

export default CorridaDetalhe;
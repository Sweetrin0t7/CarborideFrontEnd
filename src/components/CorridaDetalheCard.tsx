import { Star, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CorridaDetalheCard = () => {
  return (
    <div className="space-y-4">
      {/* Driver and Car Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Motorista"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-0.5 bg-background px-1.5 py-0.5 rounded-full text-xs border">
              <span className="font-medium">5.0</span>
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
          <span className="font-medium text-foreground">Fulano de Tal</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-16 h-10">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=120&fit=crop"
              alt="Carro"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-right">
            <p className="font-semibold text-foreground">PLACA12</p>
            <p className="text-xs text-muted-foreground">Carro modelo XYZ</p>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="Alguma observação para o motorista?"
          className="flex-1 bg-muted/50 border-0 text-sm"
          readOnly
        />
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
        >
          <MessageSquare className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg"
        >
          <MapPin className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CorridaDetalheCard;
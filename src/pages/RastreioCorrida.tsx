import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CorridaDetalhe from "@/components/CorridaDetalhe";
import CorridaDetalheCard from "@/components/CorridaDetalheCard";

const RastreioCorrida = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Map Background - Static placeholder */}
      <div className="absolute inset-0 bg-[#e8e4dc]">
        {/* Map placeholder with street-like pattern */}
        <div className="w-full h-full relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
            {/* Background */}
            <rect fill="#e8e4dc" width="400" height="800" />
            
            {/* Main roads */}
            <path d="M0 200 Q100 200 150 300 T300 400 T400 350" stroke="#fff" strokeWidth="20" fill="none" />
            <path d="M50 0 Q80 100 100 200 T150 400 T100 600 T150 800" stroke="#fff" strokeWidth="15" fill="none" />
            <path d="M200 0 L250 150 Q280 250 320 300 T380 450 T400 550" stroke="#fff" strokeWidth="18" fill="none" />
            <path d="M0 500 Q100 480 200 520 T350 500 T400 520" stroke="#fff" strokeWidth="12" fill="none" />
            
            {/* Secondary roads */}
            <path d="M0 100 L100 120 Q150 130 200 100 T300 120 T400 100" stroke="#f5f3ef" strokeWidth="8" fill="none" />
            <path d="M300 0 L280 100 Q260 200 290 300 T260 450 T300 600 T280 800" stroke="#f5f3ef" strokeWidth="10" fill="none" />
            <path d="M0 350 L80 360 Q120 365 180 350 T280 370" stroke="#f5f3ef" strokeWidth="8" fill="none" />
            <path d="M0 650 Q80 640 160 660 T300 640 T400 660" stroke="#f5f3ef" strokeWidth="8" fill="none" />
            
            {/* Building blocks */}
            <rect x="20" y="30" width="60" height="50" rx="4" fill="#d4cfc5" />
            <rect x="120" y="40" width="50" height="40" rx="4" fill="#d4cfc5" />
            <rect x="320" y="20" width="55" height="60" rx="4" fill="#d4cfc5" />
            <rect x="30" y="230" width="45" height="55" rx="4" fill="#d4cfc5" />
            <rect x="180" y="180" width="70" height="45" rx="4" fill="#d4cfc5" />
            <rect x="280" y="150" width="50" height="65" rx="4" fill="#d4cfc5" />
            <rect x="60" y="420" width="55" height="50" rx="4" fill="#d4cfc5" />
            <rect x="200" y="380" width="45" height="60" rx="4" fill="#d4cfc5" />
            <rect x="320" y="360" width="60" height="55" rx="4" fill="#d4cfc5" />
            <rect x="40" y="560" width="50" height="45" rx="4" fill="#d4cfc5" />
            <rect x="160" y="580" width="65" height="50" rx="4" fill="#d4cfc5" />
            <rect x="300" y="550" width="55" height="60" rx="4" fill="#d4cfc5" />
            <rect x="80" y="720" width="60" height="50" rx="4" fill="#d4cfc5" />
            <rect x="220" y="700" width="50" height="55" rx="4" fill="#d4cfc5" />
            
            {/* Green areas */}
            <ellipse cx="100" cy="150" rx="25" ry="20" fill="#c8d9c0" />
            <ellipse cx="350" cy="250" rx="30" ry="25" fill="#c8d9c0" />
            <ellipse cx="50" cy="500" rx="20" ry="18" fill="#c8d9c0" />
            <ellipse cx="250" cy="480" rx="28" ry="22" fill="#c8d9c0" />
            <ellipse cx="150" cy="680" rx="22" ry="20" fill="#c8d9c0" />
          </svg>
          
          {/* Location markers */}
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
          <div className="absolute top-1/2 right-1/4 transform translate-x-1/2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Button
          variant="outline"
          size="icon"
          className="w-10 h-10 rounded-lg bg-background shadow-md border-0"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* Mobile: Drawer */}
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <div className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-2xl p-4 cursor-grab active:cursor-grabbing">
              <CorridaDetalheCard />
            </div>
          </DrawerTrigger>
          <DrawerContent className="max-h-[85vh]">
            <CorridaDetalhe />
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop: Side Panel */}
      <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 w-[400px] bg-background rounded-2xl shadow-2xl p-6">
        <CorridaDetalhe />
      </div>
    </div>
  );
};

export default RastreioCorrida;
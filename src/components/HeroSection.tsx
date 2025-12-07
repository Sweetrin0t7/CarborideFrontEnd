import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const HeroSection = ({ title, subtitle, buttonText, onButtonClick }: HeroSectionProps) => {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            {subtitle}
          </p>
          <Button
            onClick={onButtonClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

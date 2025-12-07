import qrCode from "@/assets/qr-code.png";

const AppDownloadSection = () => {
  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            É mais fácil pelo aplicativo
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-background p-4 rounded-lg shadow-md">
              <img 
                src={qrCode} 
                alt="QR Code do CARBORIDE" 
                className="w-40 h-40 md:w-48 md:h-48"
              />
            </div>
            
            <div className="text-center md:text-left space-y-2">
              <p className="text-lg text-foreground">
                Baixe o <span className="text-primary font-semibold">CARBORIDE</span>
              </p>
              <p className="text-muted-foreground">Escaneie para baixar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;

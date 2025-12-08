import { ArrowLeft } from "lucide-react";
import NotificationSection from "@/components/NotificationSection";

const todayNotifications = [
  {
    id: "1",
    type: "arrived" as const,
    title: "Seu motorista chegou",
    description: "Seu motorista está esperando no local de embarque.",
    actionLabel: "Visualizar corrida",
  },
  {
    id: "2",
    type: "cancelled" as const,
    title: "Viagem cancelada",
    description: "Sua viagem foi cancelada. Você pode solicitar uma nova.",
    actionLabel: "Ver detalhes",
  },
];

const yesterdayNotifications = [
  {
    id: "3",
    type: "requested" as const,
    title: "Viagem solicitada",
    description: "Sua solicitação de viagem foi enviada com sucesso.",
    actionLabel: "Ver detalhes",
  },
  {
    id: "4",
    type: "completed" as const,
    title: "Viagem concluída",
    description: "Sua viagem foi concluída. Obrigado por viajar conosco!",
    actionLabel: "Ver detalhes",
  },
];

const Notificacoes = () => {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-background px-4 py-4 flex items-center gap-4 sticky top-0 z-10">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-lg font-semibold text-foreground flex-1 text-center pr-10">
          Notificações
        </h1>
      </header>

      {/* Content */}
      <main className="px-4 py-6 space-y-6 max-w-md mx-auto">
        <NotificationSection title="Hoje" notifications={todayNotifications} />
        <NotificationSection title="Ontem" notifications={yesterdayNotifications} />
      </main>
    </div>
  );
};

export default Notificacoes;

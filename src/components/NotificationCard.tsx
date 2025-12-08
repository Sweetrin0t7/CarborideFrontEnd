import { Car, X, Check } from "lucide-react";

type NotificationType = "arrived" | "cancelled" | "requested" | "completed";

interface NotificationCardProps {
  type: NotificationType;
  title: string;
  description: string;
  actionLabel: string;
}

const NotificationCard = ({ type, title, description, actionLabel }: NotificationCardProps) => {
  const isError = type === "cancelled";

  const getIcon = () => {
    switch (type) {
      case "arrived":
      case "requested":
        return <Car className="w-6 h-6 text-primary" />;
      case "cancelled":
        return (
          <div className="relative">
            <Car className="w-6 h-6 text-destructive" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full flex items-center justify-center">
              <X className="w-2 h-2 text-destructive-foreground" />
            </div>
          </div>
        );
      case "completed":
        return (
          <div className="relative">
            <Car className="w-6 h-6 text-primary" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full flex items-center justify-center">
              <Check className="w-2 h-2 text-primary-foreground" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex items-start gap-4 p-4 bg-card rounded-2xl">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          isError ? "bg-notification-icon-error-bg" : "bg-notification-icon-bg"
        }`}
      >
        {getIcon()}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground text-base leading-tight mb-1">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-tight mb-3">
          {description}
        </p>
        <button className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;

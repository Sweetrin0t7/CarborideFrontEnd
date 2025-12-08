import NotificationCard from "./NotificationCard";

interface Notification {
  id: string;
  type: "arrived" | "cancelled" | "requested" | "completed";
  title: string;
  description: string;
  actionLabel: string;
}

interface NotificationSectionProps {
  title: string;
  notifications: Notification[];
}

const NotificationSection = ({ title, notifications }: NotificationSectionProps) => {
  return (
    <div className="space-y-3">
      <h2 className="text-muted-foreground text-sm font-medium px-1">{title}</h2>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            type={notification.type}
            title={notification.title}
            description={notification.description}
            actionLabel={notification.actionLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationSection;
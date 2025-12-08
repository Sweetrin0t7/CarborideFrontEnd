import { User, RideHistory, UserType } from '@/types/profile';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil, MapPin, CreditCard, Car } from 'lucide-react';

interface RideHistoryCardProps {
  ride: RideHistory;
  viewerType: UserType;
}

const RideHistoryCard = ({ ride, viewerType }: RideHistoryCardProps) => {
  const initials = ride.otherUserName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const roleLabel = viewerType === 'passenger' ? 'Motorista' : 'Passageiro';

  return (
    <Card className="mb-3 shadow-sm border-border hover:border-primary/50 transition-colors">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-12 w-12 border-2 border-primary">
            <AvatarImage src={ride.otherUserAvatar} alt={ride.otherUserName} />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-muted-foreground block">{roleLabel}</span>
                <span className="font-semibold text-foreground">{ride.otherUserName}</span>
              </div>
              <div className="text-xs text-muted-foreground text-right">
                <div>{ride.date}</div>
                <div>{ride.time}</div>
              </div>
            </div>

            {viewerType === 'passenger' && ride.car && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary/50 p-1.5 rounded">
                <Car className="h-3 w-3" />
                <span>
                  {ride.car} {ride.carColor} • {ride.plate}
                </span>
              </div>
            )}

            {viewerType === 'driver' && ride.paymentMethod && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary/50 p-1.5 rounded">
                <CreditCard className="h-3 w-3" />
                <span>{ride.paymentMethod}</span>
              </div>
            )}

            <div className="flex items-center gap-1 text-xs pt-1">
              <MapPin className="h-3 w-3 text-primary" />
              <span className="text-foreground font-medium">
                {ride.origin} <span className="text-muted-foreground mx-1">→</span> {ride.destination}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface RideHistoryListProps {
  rides: RideHistory[];
  viewerType: UserType;
}

export const RideHistoryList = ({ rides, viewerType }: RideHistoryListProps) => {
  return (
    <div className="px-4 pb-6 w-full max-w-2xl mx-auto">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="font-semibold text-lg text-foreground">Histórico de Corridas</h2>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="space-y-3">
        {rides.map((ride) => (
          <RideHistoryCard key={ride.id} ride={ride} viewerType={viewerType} />
        ))}
      </div>
    </div>
  );
};

interface ProfileHeaderProps {
  user: User;
}

export const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex flex-col items-center py-8 px-4 bg-gradient-to-b from-primary/5 to-background border-b border-border mb-6">
      <div className="relative">
        <Avatar className="h-32 w-32 border-4 border-background ring-4 ring-primary/20 shadow-xl">
          <AvatarImage src={user.avatar} alt={user.name} className="object-cover" />
          <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <Button
          size="icon"
          variant="secondary"
          className="absolute bottom-0 right-0 rounded-full shadow-md h-8 w-8 border border-border"
          aria-label="Editar perfil"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-center mt-4 space-y-1">
        <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
        
        {user.type === 'driver' ? (
          <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
            {user.subinfo}
          </Badge>
        ) : (
          <p className="text-muted-foreground font-medium flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-primary/60 inline-block"></span>
            {user.subinfo}
          </p>
        )}
      </div>
    </div>
  );
};
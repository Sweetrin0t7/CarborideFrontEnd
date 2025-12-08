import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserType } from '@/types/profile';
import {
  passengerUser,
  driverUser,
  passengerRideHistory,
  driverRideHistory,
} from '@/data/mockProfileData';
import { ProfileHeader, RideHistoryList } from '@/components/UserProfile';
import { Button } from '@/components/ui/button';
import { User, CarFront } from 'lucide-react';

const Profile = () => {
  const [userType, setUserType] = useState<UserType>('passenger');

  const currentUser = userType === 'passenger' ? passengerUser : driverUser;
  const currentRides = userType === 'passenger' ? passengerRideHistory : driverRideHistory;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-4 flex justify-end">
          <div className="bg-muted p-1 rounded-lg inline-flex">
            <Button
              size="sm"
              variant={userType === 'passenger' ? 'default' : 'ghost'}
              onClick={() => setUserType('passenger')}
              className="gap-2"
            >
              <User className="h-4 w-4" />
              Passageiro
            </Button>
            <Button
              size="sm"
              variant={userType === 'driver' ? 'default' : 'ghost'}
              onClick={() => setUserType('driver')}
              className="gap-2"
            >
              <CarFront className="h-4 w-4" />
              Motorista
            </Button>
          </div>
        </div>

        <ProfileHeader user={currentUser} />
        
        <div className="container mx-auto pb-12">
          <RideHistoryList rides={currentRides} viewerType={userType} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
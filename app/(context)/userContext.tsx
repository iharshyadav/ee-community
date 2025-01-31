// UserContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useUser } from "@clerk/nextjs";

interface UserContextType {
  currentUser: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user, isLoaded } = useUser();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    if (isLoaded) {
      setCurrentUser(user || null);
      console.log("UserContext: ", user);
    }
  }, [isLoaded, user]);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType | undefined => {
  const context = useContext(UserContext);
  return context;
};

import { createContext, useEffect, useState } from "react";
import { Roles } from "../helpers/roles.enum";
import { getStorage } from "../helpers/webStorage";
import {
  UserContextValues,
  UserProviderData,
} from "../interfaces/userContext.interface";

type ProviderProps = {
  children: JSX.Element;
};

export const UserContext = createContext({});

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<UserContextValues | null>(null);
  const [isLoggued, setIsLogged] = useState(false);

  const logOut = () => {
    setIsLogged(false);
    setUser(null);
  };

  useEffect(() => {
    const token = getStorage("token");
    if (token === null) {
      return;
    }

    if (user === null) {
      setUser({
        name: "Fulanito",
        email: "fulano@email.com",
        role: Roles.ADMIN,
        image: "",
        id: 1,
      });
      setIsLogged(true);
    }
  }, []);

  const data: UserProviderData = { user, isLoggued, logOut };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

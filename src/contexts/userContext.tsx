import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorage } from '../helpers/webStorage';
import {
  UserContextValues,
  UserProviderData,
} from '../interfaces/userContext.interface';
import { getUser } from '../requests/user/user';

type ProviderProps = {
  children: JSX.Element;
};

export const UserContext = createContext({});

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<UserContextValues | null>(null);
  const [isLoggued, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const token = getStorage('token');

  const logOut = () => {
    setIsLogged(false);
    setUser(null);
  };

  useEffect(() => {
    if (token === null) {
      return;
    }

    if (user === null) {
      getUserData(token);
    }
  }, [token]);

  const getUserData = async (token: string) => {
    const { errorCode, user } = await getUser(token);
    if (errorCode) {
      navigate(`/error?errorcode=${errorCode}`);
      return;
    }
    setUser(user!);
    setIsLogged(true);
  };

  const data: UserProviderData = { user, isLoggued, logOut };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

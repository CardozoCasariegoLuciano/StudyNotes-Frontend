import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { UserProviderData } from "../interfaces/userContext.interface";

const useUser = () => {
  const contextValue = useContext(UserContext) as UserProviderData;
  if (contextValue == null) {
    throw new Error("No se puede acceder al contexto");
  }

  return contextValue;
};

export default useUser;

import { createContext, ReactNode, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { IUserContext } from "../interfaces/IUserContext";

type Props = {
  children?: ReactNode;
  // any props that come into the component
};

// Create the context
export const UserContext = createContext<IUserContext | null>(null);

// Create the provider component
export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser>({
    login: "",
    password: "",
    isAdmin: false,
  });
  const [isAdminPanelVisible, setAdminPanelVisible] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAdminPanelVisible,
        setAdminPanelVisible,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

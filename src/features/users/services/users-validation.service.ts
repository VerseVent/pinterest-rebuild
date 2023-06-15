import { useContext } from "react";
import { IUser } from "../interfaces/IUser";
import { IUserContext } from "../interfaces/IUserContext";
import { UserContext } from "../states/UserProvider";
import { UsersApiService } from "./users-api.service";

export function UsersValidationService() {
  const { getUsers } = UsersApiService();

  const { user, setUser, setAdminPanelVisible } = useContext(
    UserContext
  ) as IUserContext;

  async function validateUser(user: IUser) {
    const users: IUser[] = await getUsers();
    const dbUser = users.find((resUser) => resUser.login === user.login);

    if (dbUser) {
      setUser(dbUser);
    } else throw new Error("Wrong email or password");
  }
  function getActualUser() {
    return user;
  }
  function toggleAdminPanel() {
    setAdminPanelVisible((current) => !current);
  }

  return {
    validateUser,
    getActualUser,
    toggleAdminPanel,
  };
}

import { IUser } from "./IUser";

export interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
  isAdminPanelVisible: boolean;
  setAdminPanelVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

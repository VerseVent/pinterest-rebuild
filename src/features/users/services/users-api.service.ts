import { IUser } from "../interfaces/IUser";

export function UsersApiService() {
  const getUsers = async (): Promise<IUser[]> => {
    const result = await fetch("Users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const users: IUser[] = await result.json();

    return users;
  };

  return { getUsers };
}

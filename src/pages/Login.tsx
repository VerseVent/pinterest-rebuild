import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../features/users/interfaces/IUser";
import { UsersValidationService } from "../features/users/services/users-validation.service";

function Login() {
  const [user, setUser] = useState<IUser>({
    login: "",
    password: "",
    isAdmin: false,
  });

  const { validateUser } = UsersValidationService();
  const reactNavigator = useNavigate();

  const handleChange = (event: ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await validateUser(user);
      reactNavigator("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mx-auto text-center">
      <form
        className="flex text-start flex-col mt-12 justify-center w-96 mx-auto bg-gradient-to-bl from-blue-400 to-indigo-800 px-6 pb-6 pt-6 rounded-xl"
        onSubmit={(event) => handleSubmit(event)}
      >
        <h1 className="text-white text-center text-4xl font-semibold pb-14">
          Sign in
        </h1>
        <label htmlFor="login" className="pb-2 text-white">
          Login
        </label>
        <input
          name="login"
          value={user.login}
          onChange={(e) => handleChange(e)}
          className="rounded-xl p-3 mb-4 outline-none"
          placeholder="login"
          type="text"
        />
        <label htmlFor="password" className="pb-2 text-white">
          Password
        </label>
        <input
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
          className="rounded-xl p-3 mb-4 outline-none"
          placeholder="password"
          type="password"
        />
        <div className="flex mb-16 items-center">
          <input name="remember" type="checkbox" className="ml-2" />
          <label htmlFor="remember" className="text-white pl-2">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="bg-indigo-400 text-white font-semibold text-lg self-end px-8 py-2 rounded-2xl"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;

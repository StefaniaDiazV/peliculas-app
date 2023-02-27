import { useContext } from "react";
import { AuthContext } from "../../context";
import { tokenGenerator } from "../../helpers/tokenGeneretor";
import { userServices } from "../../services/users";
import { loginForm, User } from "../../types";

const useMe = () => {
  const { me, setMe } = useContext(AuthContext);

  const login = async ({ email, pass }: loginForm) => {
    console.info("login");
    const user = await userServices.getBy("email", email);

    if (user && user.password === pass) {

      const { id, name, lastname } = user;
      const token = tokenGenerator();
      userServices.update({ id, token });
      localStorage.setItem("token", token);
      setMe({ id, name, lastname, email });

    } else {
      console.log("login incorrecto");
    }
  };

  const signup = (user: Omit<User, "id">) => {
    userServices.add({
        ...user,
        birthdate: new Date(user.birthdate),
      });
  };

  return { me , signup, login}

};

export { useMe };

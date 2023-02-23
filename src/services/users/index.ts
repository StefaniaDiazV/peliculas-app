import { SignUpPayload } from "../../types";
import { api } from "../../utils/axios";

const add = async (user: SignUpPayload) => {
    const response = await api.post("/users.json", user);
    return response.data;
  };


  export const userServices =  { add }
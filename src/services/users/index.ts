import { SignUpPayload } from "../../types";
import { apiUser } from "../../utils/axios";

const add = async (user: SignUpPayload) => {
    const response = await apiUser.post("/users.json", user);
    return response.data;
  };


  export const userServices =  { add }
import { apiUser } from "../../utils/axios";

const add = async (user: any) => {
    const response = await apiUser.post("/users.json", user);
    return response.data;
  };


  export const userServices =  { add }
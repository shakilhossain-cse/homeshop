import { TLoginData } from "../pages/Auth/Login";
import { TRegisterData } from "../pages/Auth/Register";
import { IUser } from "../type";
import { HttpClient } from "../utils/axios";

type requestResponse = {
  token: string;
  user: IUser;
};
// login service
export const loginRequest = (data: TLoginData): Promise<requestResponse> =>
  HttpClient.post<requestResponse>("/login", data).then((res) => res.data);
// register service
export const registerRequest = (
  data: TRegisterData
): Promise<requestResponse> =>
  HttpClient.post<requestResponse>("/register", data).then((res) => res.data);

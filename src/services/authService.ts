import { TLoginData } from "../pages/Auth/Login";
import { TRegisterData } from "../pages/Auth/Register";
import { IChangePasswordData } from "../pages/User/Profile/ChangePassword";
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

export const logoutRequest = () =>
  HttpClient.post("/logout").then((res) => res.data);
export const changePasswordRequest = (data: IChangePasswordData) =>
  HttpClient.post("/change-password", data).then((res) => res.data);

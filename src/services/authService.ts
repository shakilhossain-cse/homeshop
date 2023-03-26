import { TLoginData } from "../pages/Auth/Login";
import { IUser } from "../type";
import { HttpClient } from "../utils/axios";

type LoginResponse = {
  token: string;
  user: IUser;
};

export const loginRequest = (data: TLoginData): Promise<LoginResponse> =>
  HttpClient.post<LoginResponse>("/login", data).then((res) => res.data);

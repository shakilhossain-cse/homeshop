import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../../services/authService";
import { useSetRecoilState } from "recoil";
import { tokenAtom, userAtom } from "../../recoil/atoms/LoginAtom";
import { addToLocalStorage } from "../../utils/localStorage";
import { TOKEN_KEY, USER_KEY } from "../../recoil/constance";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginSchema } from "./authSchema";
import { AxiosError } from "axios";

export type TLoginData = {
  email: string;
  password: string;
};

interface LoginError {
  response?: {
    data?: {
      message: string;
    };
  };
}

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const setUser = useSetRecoilState(userAtom);
  const setToken = useSetRecoilState(tokenAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const redirect = new URLSearchParams(location.search).get("redirect");
  const path = redirect ? "/" + redirect : "/";

  const { mutateAsync, isLoading, error, isError } = useMutation(loginRequest, {
    onSuccess: ({ token, user }) => {
      setToken(token);
      addToLocalStorage(TOKEN_KEY, token);
      setUser(user);
      addToLocalStorage(USER_KEY, user);
      navigate(path, { replace: true });
    },
  });

  const onSubmit = (data: TLoginData) => {
    mutateAsync(data);
  };

  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h1 className="text-2xl uppercase font-medium mb-1">Login</h1>
        <p className="text-gray-600 text-sm mb-6">Welcome Back</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Type your email address"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-primary text-sm">{errors.email.message}</p>
              )}
              {isError && (
                <p className="text-primary">
                  {(error as LoginError).response?.data?.message ||
                    "Invalid email or password"}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Type your email address"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-primary text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="agreement"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="agreement"
                  className="text-gray-600 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-primary">
                Forgot Password
              </a>
            </div>
            <div>
              <button
                type="submit"
                className={`${
                  isLoading ? "bg-red-400 cursor-not-allowed" : "bg-primary"
                } w-full text-white py-2 rounded`}
                disabled={isLoading}
              >
                {isLoading ? "Logging" : "Login"}
              </button>
              <p className="text-gray-600 my-2">
                Don't have a account
                <a href="#" className="text-primary">
                  Register Here
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

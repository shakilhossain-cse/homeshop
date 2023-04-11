import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { tokenAtom, userAtom } from "../../recoil/atoms/LoginAtom";
import { TOKEN_KEY, USER_KEY } from "../../recoil/constance";
import { registerRequest } from "../../services/authService";
import { AxiosErrorResponse } from "../../type";
import { addToLocalStorage } from "../../utils/localStorage";
import { RegisterSchema } from "./authSchema";

export type TRegisterData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  trams: boolean;
};

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterData>({
    resolver: zodResolver(RegisterSchema),
  });
  const setToken = useSetRecoilState(tokenAtom);
  const setUser = useSetRecoilState(userAtom);

  const { mutateAsync, isLoading, error, isError } = useMutation(
    registerRequest,
    {
      onSuccess: ({ token, user }) => {
        setToken(token);
        addToLocalStorage(TOKEN_KEY, token);
        setUser(user);
        addToLocalStorage(USER_KEY, user);
        navigate("/", { replace: true });
      },
    }
  );

  const onSubmit = (data: TRegisterData) => {
    mutateAsync(data);
  };

  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h1 className="text-2xl uppercase font-medium mb-1">Register</h1>
        <p className="text-gray-600 text-sm ">Welcome to come here</p>
        {isError && (
          <p className="text-primary">
            {(error as AxiosErrorResponse).response?.data?.message ||
              "Invalid email or password"}
          </p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">
                First Name
              </label>
              <input
                id="name"
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Type your name"
                {...register("first_name")}
              />
              {errors.first_name && (
                <p className="text-primary text-sm">{errors.first_name?.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Type your name"
                {...register("last_name")}
              />
              {errors.last_name && (
                <p className="text-primary text-sm">{errors.last_name?.message}</p>
              )}
            </div>
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
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Type your password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-primary text-sm">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-gray-600 mb-2 block"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="Type your password again"
                {...register("password_confirmation")}
              />
              {errors.password_confirmation && (
                <p className="text-primary text-sm">
                  {errors.password_confirmation.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="agreement"
                  {...register("trams")}
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="agreement"
                  className="text-gray-600 cursor-pointer"
                >
                  I Accept
                </label>
              </div>
              <a href="#" className="text-primary">
                Trams & Condition
              </a>
            </div>
            {errors.trams && (
              <p className="text-primary text-sm">{errors.trams.message}</p>
            )}
            <div>
            <button
                type="submit"
                className={`${
                  isLoading ? "bg-red-400 cursor-not-allowed" : "bg-primary"
                } w-full text-white py-2 rounded`}
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
              <p className="text-gray-600 my-2">
                Already have a Account{" "}
                <Link to="/login" className="text-primary">
                  Login Here
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

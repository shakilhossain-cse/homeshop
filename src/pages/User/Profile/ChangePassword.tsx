import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { changePasswordRequest } from "../../../services/authService";
import { toast } from "react-toastify";
import { changePasswordSchema } from "./schema";

export type IChangePasswordData = {
  current_password: string;
  password: string;
  password_confirmation: string;
};



function ChangePassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IChangePasswordData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const { mutate } = useMutation(changePasswordRequest, {
    onError(error:any) {
      toast.error(error.response.data.message);
    },
    onSuccess(data) {
      toast.success(data.message);
      reset();
    },
  });
  const onSubmit = (data: IChangePasswordData) => {
    mutate(data);
  };
  return (
    <div className="shadow rounded bg-white px-4 py-6 pb-8 w-full">
      <div>
        <h3 className="text-lg font-medium mb-4 capitalize">
          Profile Information
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-11 gap-4">
            <div className="col-span-12 md:col-span-6">
              <label htmlFor="firstName" className="text-gray-600 mb-2 block">
                Current Password
              </label>
              <input
                id="firstName"
                type="password"
                {...register("current_password")}
                className="input-box"
              />
              {errors.current_password && (
                <p className="text-primary text-sm">
                  {errors.current_password.message}
                </p>
              )}
            </div>
            <div className="col-span-12 md:col-span-6">
              <label htmlFor="lastName" className="text-gray-600 mb-2 block">
                New Password
              </label>
              <input
                id="lastName"
                type="password"
                className="input-box"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-primary text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="col-span-12 md:col-span-6">
              <label htmlFor="lastName" className="text-gray-600 mb-2 block">
                Confirm Password
              </label>
              <input
                id="lastName"
                type="password"
                className="input-box"
                {...register("password_confirmation")}
              />
              {errors.password_confirmation && (
                <p className="text-primary text-sm">
                  {errors.password_confirmation.message}
                </p>
              )}
            </div>
          </div>

          <button className="block px-5 mt-4 py-1 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition">
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;

import React, { useEffect } from "react";
import { getBillingData } from "../../../services/billingService";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoSchema } from "./schema";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../recoil/atoms/LoginAtom";

interface IProfileData {
  first_name: string;
  last_name: string;
  birthday: Date;
  gender: "male" | "female" | "other";
  email: string;
  phone_number: string;
}

function ProfileInfo() {
  const user = useRecoilValue(userAtom);
  const { data } = useQuery(["Billing"], getBillingData);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IProfileData>({
    resolver: zodResolver(InfoSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
    },
  });

  const onSubmit = (data: IProfileData) => {
    console.log(data);
  };
  useEffect(() => {
    if (data) {
      setValue("first_name", data.firstName);
      setValue("last_name", data.lastName);
      setValue("email", user?.email ?? "");
    }
  }, [data]);

  return (
    <div className="shadow rounded bg-white px-4 py-6 pb-8 w-full">
      <div>
        <h3 className="text-lg font-medium mb-4 capitalize">
          Profile Information
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-gray-600 mb-2 block">
                First Name
              </label>
              <input
                id="firstName"
                {...register("first_name")}
                type="text"
                className="input-box"
              />
              {errors.first_name && (
                <p className="text-primary text-sm">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="text-gray-600 mb-2 block">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                {...register("last_name")}
                className="input-box"
              />
              {errors.last_name && (
                <p className="text-primary text-sm">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="Birthday" className="text-gray-600 mb-2 block">
                Birthday
              </label>
              <input
                id="Birthday"
                {...register("birthday")}
                type="date"
                className="input-box"
              />
              {errors.birthday && (
                <p className="text-primary text-sm">
                  {errors.birthday.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="gender" className="text-gray-600 mb-2 block">
                Gender
              </label>
              <select id="gender" {...register("gender")} className="input-box">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-primary text-sm">{errors.gender.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email Address
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                className="input-box"
                readOnly
              />
              {errors.email && (
                <p className="text-primary text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="text-gray-600 mb-2 block">
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                {...register("phone_number")}
                className="input-box"
              />
              {errors.phone_number && (
                <p className="text-primary text-sm">
                  {errors.phone_number.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="block px-5 mt-4 py-1 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
          >
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileInfo;

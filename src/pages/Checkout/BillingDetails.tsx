import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IBillingInputs } from ".";
import { getBillingData } from "../../services/billingService";

export interface IBillingProps {
  register: UseFormRegister<IBillingInputs>;
  errors: FieldErrors<IBillingInputs>;
}

const BillingDetails: React.FC<IBillingProps> = ({ register, errors }) => {


  return (
    <div className="col-span-12 md:col-span-8 border p-4 rounded">
      <h3 className="text-lg font-medium mb-4 bg-[#E9E4E4] py-1 px-3 uppercase text-black">
        Billing Details
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="text-gray-600 mb-2 block">
              First Name <span className="text-primary">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              className="input-box"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-primary text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="LastName" className="text-gray-600 mb-2 block">
              Last Name <span className="text-primary">*</span>
            </label>
            <input
              id="LastName"
              type="text"
              className="input-box"
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-primary text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="Company" className="text-gray-600 mb-2 block">
            Company Name
          </label>
          <input
            id="Company"
            type="text"
            className="input-box"
            {...register("companyName")}
          />
          {errors.companyName && (
            <p className="text-primary text-sm">{errors.companyName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Country" className="text-gray-600 mb-2 block">
            Country/Region <span className="text-primary">*</span>
          </label>
          <input
            id="Country"
            type="text"
            className="input-box"
            {...register("country")}
          />
          {errors.country && (
            <p className="text-primary text-sm">{errors.country.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Street" className="text-gray-600 mb-2 block">
            Street Address <span className="text-primary">*</span>
          </label>
          <input
            id="Street"
            type="text"
            className="input-box"
            {...register("streetAddress")}
          />
          {errors.streetAddress && (
            <p className="text-primary text-sm">
              {errors.streetAddress.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="Town" className="text-gray-600 mb-2 block">
            Town/City <span className="text-primary">*</span>
          </label>
          <input
            id="Town"
            type="text"
            className="input-box"
            {...register("townCity")}
          />
          {errors.townCity && (
            <p className="text-primary text-sm">{errors.townCity.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Zip" className="text-gray-600 mb-2 block">
            Zip Code <span className="text-primary">*</span>
          </label>
          <input
            id="Zip"
            type="text"
            className="input-box"
            {...register("zipCode")}
          />
          {errors.zipCode && (
            <p className="text-primary text-sm">{errors.zipCode.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Phone" className="text-gray-600 mb-2 block">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            id="Phone"
            type="text"
            className="input-box"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className="text-primary text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Email" className="text-gray-600 mb-2 block">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            id="Email"
            type="email"
            className="input-box"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-primary text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { z } from "zod";
import { cartAtom } from "../../recoil";
import RequireAuth from "../../routes/RequireAuth";
import { getBillingData, upsertBilling } from "../../services/billingService";
import BillingDetails from "./BillingDetails";
import OrderSummary from "./OrderSummary";

export interface IBillingInputs {
  firstName: string;
  lastName: string;
  companyName: string | null;
  country: string;
  streetAddress: string;
  townCity: string;
  zipCode: string;
  phoneNumber: string;
  email: string;
  trams: boolean;
}

function Checkout() {
  const cartItems = useRecoilValue(cartAtom);
  const { data } = useQuery<IBillingInputs>(["Billing"], getBillingData);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IBillingInputs>({
    resolver: zodResolver(BillingInputsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      townCity: "",
      zipCode: "",
    },
  });

  const { isError, error, mutateAsync } = useMutation(upsertBilling, {
    onSuccess: () => {
      navigate("/payment");
    },
    onError: (error: any) => {
      console.log(error?.response.data.errors);
    },
  });

  const handelOnSubmit = (data: IBillingInputs) => {
    mutateAsync(data);
  };
  useEffect(() => {
    if (!cartItems.length) {
      navigate("/shop");
    }
  }, []);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  useEffect(() => {
    if (data) {
      setValue("firstName", data.firstName);
      setValue("lastName", data.lastName);
      setValue("companyName", data.companyName);
      setValue("country", data.country);
      setValue("email", data.email);
      setValue("phoneNumber", data.phoneNumber);
      setValue("streetAddress", data.streetAddress);
      setValue("townCity", data.townCity);
      setValue("zipCode", data.zipCode);
    }
  }, [data]);

  return (
    <RequireAuth>
      <form
        onSubmit={handleSubmit(handelOnSubmit)}
        className="container grid grid-cols-12 gap-4 items-start py-4"
      >
        <BillingDetails register={register} errors={errors} />
        <OrderSummary errors={errors} register={register} />
      </form>
    </RequireAuth>
  );
}

export const BillingInputsSchema = z
  .object({
    firstName: z.string().nonempty("first name is required"),
    lastName: z.string().nonempty("last name is required"),
    companyName: z.string().nullable(),
    country: z.string().nonempty("country is required"),
    streetAddress: z.string().nonempty("street Address is required"),
    townCity: z.string().nonempty("town/city is required"),
    zipCode: z.string().nonempty("zip code is required"),
    phoneNumber: z.string().nonempty("phone number is required"),
    email: z.string().email().nonempty("email Name is required"),
    trams: z.boolean().refine((value) => value === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .strict();

export default Checkout;

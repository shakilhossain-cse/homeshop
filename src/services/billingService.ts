import { IBillingInputs } from "../pages/Checkout";
import { HttpClient } from "../utils/axios";

export const getBillingData = () => HttpClient.get("/billing").then((res) => res.data);

export const upsertBilling = (data:IBillingInputs):Promise<any> => HttpClient.post('upsert-billing',data).then(res => res.data);
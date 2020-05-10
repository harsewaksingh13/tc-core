import { BaseRequest } from "./baseRequest";

export interface BusinessRequest extends BaseRequest {
  email: string;
  password: string;
}

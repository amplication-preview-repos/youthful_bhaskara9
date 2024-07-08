import { Injectable } from "@nestjs/common";
import { CheckPaymentStatusRequest } from "../tinkoffIntegration/CheckPaymentStatusRequest";
import { CheckPaymentStatusResponse } from "../tinkoffIntegration/CheckPaymentStatusResponse";
import { InitiatePaymentRequest } from "../tinkoffIntegration/InitiatePaymentRequest";
import { InitiatePaymentResponse } from "../tinkoffIntegration/InitiatePaymentResponse";

@Injectable()
export class TinkoffIntegrationService {
  constructor() {}
  async CheckPaymentStatus(args: CheckPaymentStatusRequest): Promise<CheckPaymentStatusResponse> {
    throw new Error("Not implemented");
  }
  async InitiatePayment(args: InitiatePaymentRequest): Promise<InitiatePaymentResponse> {
    throw new Error("Not implemented");
  }
}

import * as graphql from "@nestjs/graphql";
import { CheckPaymentStatusRequest } from "../tinkoffIntegration/CheckPaymentStatusRequest";
import { CheckPaymentStatusResponse } from "../tinkoffIntegration/CheckPaymentStatusResponse";
import { InitiatePaymentRequest } from "../tinkoffIntegration/InitiatePaymentRequest";
import { InitiatePaymentResponse } from "../tinkoffIntegration/InitiatePaymentResponse";
import { TinkoffIntegrationService } from "./tinkoffintegration.service";

export class TinkoffIntegrationResolver {
  constructor(protected readonly service: TinkoffIntegrationService) {}

  @graphql.Query(() => CheckPaymentStatusResponse)
  async CheckPaymentStatus(
    @graphql.Args()
    args: CheckPaymentStatusRequest
  ): Promise<CheckPaymentStatusResponse> {
    return this.service.CheckPaymentStatus(args);
  }

  @graphql.Mutation(() => InitiatePaymentResponse)
  async InitiatePayment(
    @graphql.Args()
    args: InitiatePaymentRequest
  ): Promise<InitiatePaymentResponse> {
    return this.service.InitiatePayment(args);
  }
}

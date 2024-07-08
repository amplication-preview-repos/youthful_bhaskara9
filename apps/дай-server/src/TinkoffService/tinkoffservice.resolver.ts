import * as graphql from "@nestjs/graphql";
import { CheckPaymentStatusRequest } from "../tinkoffIntegration/CheckPaymentStatusRequest";
import { CheckPaymentStatusResponse } from "../tinkoffIntegration/CheckPaymentStatusResponse";
import { InitiatePaymentRequest } from "../tinkoffIntegration/InitiatePaymentRequest";
import { InitiatePaymentResponse } from "../tinkoffIntegration/InitiatePaymentResponse";
import { TinkoffServiceService } from "./tinkoffservice.service";

export class TinkoffServiceResolver {
  constructor(protected readonly service: TinkoffServiceService) {}

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

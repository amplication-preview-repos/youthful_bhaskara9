import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TinkoffIntegrationService } from "./tinkoffintegration.service";
import { InitiatePaymentRequest } from "../tinkoffIntegration/InitiatePaymentRequest";
import { CheckPaymentStatusResponse } from "../tinkoffIntegration/CheckPaymentStatusResponse";
import { InitiatePaymentResponse } from "../tinkoffIntegration/InitiatePaymentResponse";

@swagger.ApiTags("tinkoffIntegrations")
@common.Controller("tinkoffIntegrations")
export class TinkoffIntegrationController {
  constructor(protected readonly service: TinkoffIntegrationService) {}

  @common.Get("/tinkoff/payment-status/:transactionId")
  @swagger.ApiOkResponse({
    type: CheckPaymentStatusResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckPaymentStatus(
    @common.Body()
    body: InitiatePaymentRequest
  ): Promise<CheckPaymentStatusResponse> {
        return this.service.CheckPaymentStatus(body);
      }

  @common.Post("/tinkoff/initiate-payment")
  @swagger.ApiOkResponse({
    type: InitiatePaymentResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitiatePayment(
    @common.Body()
    body: InitiatePaymentRequest
  ): Promise<InitiatePaymentResponse> {
        return this.service.InitiatePayment(body);
      }
}

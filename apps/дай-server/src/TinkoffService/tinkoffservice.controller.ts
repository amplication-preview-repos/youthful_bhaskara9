import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TinkoffServiceService } from "./tinkoffservice.service";
import { InitiatePaymentRequest } from "../tinkoffIntegration/InitiatePaymentRequest";
import { CheckPaymentStatusResponse } from "../tinkoffIntegration/CheckPaymentStatusResponse";
import { InitiatePaymentResponse } from "../tinkoffIntegration/InitiatePaymentResponse";

@swagger.ApiTags("tinkoffServices")
@common.Controller("tinkoffServices")
export class TinkoffServiceController {
  constructor(protected readonly service: TinkoffServiceService) {}

  @common.Get("/tinkoff/status/:transactionId")
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

  @common.Post("/tinkoff/initiate")
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

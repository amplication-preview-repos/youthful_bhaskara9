import { Module } from "@nestjs/common";
import { TinkoffIntegrationService } from "./tinkoffintegration.service";
import { TinkoffIntegrationController } from "./tinkoffintegration.controller";
import { TinkoffIntegrationResolver } from "./tinkoffintegration.resolver";

@Module({
  controllers: [TinkoffIntegrationController],
  providers: [TinkoffIntegrationService, TinkoffIntegrationResolver],
  exports: [TinkoffIntegrationService],
})
export class TinkoffIntegrationModule {}

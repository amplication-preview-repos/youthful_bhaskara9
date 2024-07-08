import { Module } from "@nestjs/common";
import { TinkoffServiceService } from "./tinkoffservice.service";
import { TinkoffServiceController } from "./tinkoffservice.controller";
import { TinkoffServiceResolver } from "./tinkoffservice.resolver";

@Module({
  controllers: [TinkoffServiceController],
  providers: [TinkoffServiceService, TinkoffServiceResolver],
  exports: [TinkoffServiceService],
})
export class TinkoffServiceModule {}

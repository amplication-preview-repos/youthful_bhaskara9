import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SupporterModuleBase } from "./base/supporter.module.base";
import { SupporterService } from "./supporter.service";
import { SupporterController } from "./supporter.controller";
import { SupporterResolver } from "./supporter.resolver";

@Module({
  imports: [SupporterModuleBase, forwardRef(() => AuthModule)],
  controllers: [SupporterController],
  providers: [SupporterService, SupporterResolver],
  exports: [SupporterService],
})
export class SupporterModule {}

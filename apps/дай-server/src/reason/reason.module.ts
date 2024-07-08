import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReasonModuleBase } from "./base/reason.module.base";
import { ReasonService } from "./reason.service";
import { ReasonController } from "./reason.controller";
import { ReasonResolver } from "./reason.resolver";

@Module({
  imports: [ReasonModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReasonController],
  providers: [ReasonService, ReasonResolver],
  exports: [ReasonService],
})
export class ReasonModule {}

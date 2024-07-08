import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReasonService } from "./reason.service";
import { ReasonControllerBase } from "./base/reason.controller.base";

@swagger.ApiTags("reasons")
@common.Controller("reasons")
export class ReasonController extends ReasonControllerBase {
  constructor(
    protected readonly service: ReasonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

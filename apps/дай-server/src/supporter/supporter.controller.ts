import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SupporterService } from "./supporter.service";
import { SupporterControllerBase } from "./base/supporter.controller.base";

@swagger.ApiTags("supporters")
@common.Controller("supporters")
export class SupporterController extends SupporterControllerBase {
  constructor(
    protected readonly service: SupporterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SupporterServiceBase } from "./base/supporter.service.base";

@Injectable()
export class SupporterService extends SupporterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

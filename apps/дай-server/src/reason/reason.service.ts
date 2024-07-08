import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReasonServiceBase } from "./base/reason.service.base";

@Injectable()
export class ReasonService extends ReasonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { SupporterWhereInput } from "./SupporterWhereInput";
import { SupporterOrderByInput } from "./SupporterOrderByInput";

export type SupporterFindManyArgs = {
  where?: SupporterWhereInput;
  orderBy?: Array<SupporterOrderByInput>;
  skip?: number;
  take?: number;
};

import { SupporterWhereUniqueInput } from "../supporter/SupporterWhereUniqueInput";
import { ReasonWhereUniqueInput } from "../reason/ReasonWhereUniqueInput";

export type DonationCreateInput = {
  donationDate?: Date | null;
  amount?: number | null;
  supporter?: SupporterWhereUniqueInput | null;
  reason?: ReasonWhereUniqueInput | null;
};

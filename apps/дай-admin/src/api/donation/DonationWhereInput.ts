import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SupporterWhereUniqueInput } from "../supporter/SupporterWhereUniqueInput";
import { ReasonWhereUniqueInput } from "../reason/ReasonWhereUniqueInput";

export type DonationWhereInput = {
  id?: StringFilter;
  donationDate?: DateTimeNullableFilter;
  amount?: FloatNullableFilter;
  supporter?: SupporterWhereUniqueInput;
  reason?: ReasonWhereUniqueInput;
};

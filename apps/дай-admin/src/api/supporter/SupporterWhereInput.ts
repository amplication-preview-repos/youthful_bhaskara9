import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DonationListRelationFilter } from "../donation/DonationListRelationFilter";

export type SupporterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  donations?: DonationListRelationFilter;
};

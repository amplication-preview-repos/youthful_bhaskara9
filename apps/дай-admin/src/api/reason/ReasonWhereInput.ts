import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DonationListRelationFilter } from "../donation/DonationListRelationFilter";

export type ReasonWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  donations?: DonationListRelationFilter;
};

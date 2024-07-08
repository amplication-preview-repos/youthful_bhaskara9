import { DonationCreateNestedManyWithoutSupportersInput } from "./DonationCreateNestedManyWithoutSupportersInput";

export type SupporterCreateInput = {
  name?: string | null;
  email?: string | null;
  donations?: DonationCreateNestedManyWithoutSupportersInput;
};

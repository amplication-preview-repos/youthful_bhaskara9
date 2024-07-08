import { DonationUpdateManyWithoutSupportersInput } from "./DonationUpdateManyWithoutSupportersInput";

export type SupporterUpdateInput = {
  name?: string | null;
  email?: string | null;
  donations?: DonationUpdateManyWithoutSupportersInput;
};

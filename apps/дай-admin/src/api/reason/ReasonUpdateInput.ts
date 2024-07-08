import { DonationUpdateManyWithoutReasonsInput } from "./DonationUpdateManyWithoutReasonsInput";

export type ReasonUpdateInput = {
  title?: string | null;
  description?: string | null;
  donations?: DonationUpdateManyWithoutReasonsInput;
};

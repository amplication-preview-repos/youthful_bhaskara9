import { DonationCreateNestedManyWithoutReasonsInput } from "./DonationCreateNestedManyWithoutReasonsInput";

export type ReasonCreateInput = {
  title?: string | null;
  description?: string | null;
  donations?: DonationCreateNestedManyWithoutReasonsInput;
};

import { Supporter } from "../supporter/Supporter";
import { Reason } from "../reason/Reason";

export type Donation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  donationDate: Date | null;
  amount: number | null;
  supporter?: Supporter | null;
  reason?: Reason | null;
};

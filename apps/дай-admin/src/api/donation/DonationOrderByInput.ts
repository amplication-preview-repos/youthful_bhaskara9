import { SortOrder } from "../../util/SortOrder";

export type DonationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  donationDate?: SortOrder;
  amount?: SortOrder;
  supporterId?: SortOrder;
  reasonId?: SortOrder;
};

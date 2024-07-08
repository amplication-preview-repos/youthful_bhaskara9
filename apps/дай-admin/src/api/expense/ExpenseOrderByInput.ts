import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  amount?: SortOrder;
  expenseDate?: SortOrder;
};

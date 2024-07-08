import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ExpenseWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  amount?: FloatNullableFilter;
  expenseDate?: DateTimeNullableFilter;
};

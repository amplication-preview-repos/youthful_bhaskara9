export type Expense = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  amount: number | null;
  expenseDate: Date | null;
};

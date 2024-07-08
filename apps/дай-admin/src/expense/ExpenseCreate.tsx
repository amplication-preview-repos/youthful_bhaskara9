import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ExpenseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="expenseDate" source="expenseDate" />
      </SimpleForm>
    </Create>
  );
};

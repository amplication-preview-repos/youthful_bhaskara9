import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ExpenseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="expenseDate" source="expenseDate" />
      </SimpleForm>
    </Edit>
  );
};

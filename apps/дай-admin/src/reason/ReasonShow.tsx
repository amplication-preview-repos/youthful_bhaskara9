import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SUPPORTER_TITLE_FIELD } from "../supporter/SupporterTitle";
import { REASON_TITLE_FIELD } from "./ReasonTitle";

export const ReasonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <ReferenceManyField
          reference="Donation"
          target="reasonId"
          label="Donations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="donationDate" source="donationDate" />
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="supporter"
              source="supporter.id"
              reference="Supporter"
            >
              <TextField source={SUPPORTER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="reason"
              source="reason.id"
              reference="Reason"
            >
              <TextField source={REASON_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

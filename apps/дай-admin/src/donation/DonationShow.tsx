import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SUPPORTER_TITLE_FIELD } from "../supporter/SupporterTitle";
import { REASON_TITLE_FIELD } from "../reason/ReasonTitle";

export const DonationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="reason" source="reason.id" reference="Reason">
          <TextField source={REASON_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

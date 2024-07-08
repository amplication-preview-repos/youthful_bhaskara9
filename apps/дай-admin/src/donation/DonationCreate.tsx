import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SupporterTitle } from "../supporter/SupporterTitle";
import { ReasonTitle } from "../reason/ReasonTitle";

export const DonationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="donationDate" source="donationDate" />
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="supporter.id"
          reference="Supporter"
          label="supporter"
        >
          <SelectInput optionText={SupporterTitle} />
        </ReferenceInput>
        <ReferenceInput source="reason.id" reference="Reason" label="reason">
          <SelectInput optionText={ReasonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

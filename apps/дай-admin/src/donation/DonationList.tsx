import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SUPPORTER_TITLE_FIELD } from "../supporter/SupporterTitle";
import { REASON_TITLE_FIELD } from "../reason/ReasonTitle";

export const DonationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Donations"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="reason" source="reason.id" reference="Reason">
          <TextField source={REASON_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

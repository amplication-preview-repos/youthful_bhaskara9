import { Donation } from "../donation/Donation";

export type Reason = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  donations?: Array<Donation>;
};

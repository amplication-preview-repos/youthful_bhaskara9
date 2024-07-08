import { Donation } from "../donation/Donation";

export type Supporter = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  donations?: Array<Donation>;
};

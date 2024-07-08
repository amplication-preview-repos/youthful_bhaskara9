import { Supporter as TSupporter } from "../api/supporter/Supporter";

export const SUPPORTER_TITLE_FIELD = "name";

export const SupporterTitle = (record: TSupporter): string => {
  return record.name?.toString() || String(record.id);
};

import { Reason as TReason } from "../api/reason/Reason";

export const REASON_TITLE_FIELD = "title";

export const ReasonTitle = (record: TReason): string => {
  return record.title?.toString() || String(record.id);
};

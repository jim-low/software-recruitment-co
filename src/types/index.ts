import { Dayjs } from "dayjs";
import { EProgrammingLanguage } from "../constants";

export type JobCardType = {
  programmingLanguages: EProgrammingLanguage[];
  title: string;
  location: string;
  salary: {
    amount: string;
    currency: string; // currency character (eg: $, £)
  };
  description: string;
  postedOn: Dayjs;
};

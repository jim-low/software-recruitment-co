import { EProgrammingLanguage } from "../constants";

export enum VariantType {
  YELLOW = 'YELLOW',
  BLUE = 'BLUE',
  ORANGE = 'ORANGE',
}

export type CurrencyType = {
  amount: string;
  currency: string; // currency character (eg: $, £)
}

export type JobCardType = {
  programmingLanguages: EProgrammingLanguage[];
  title: string;
  location: string;
  salary: CurrencyType;
  description: string;
  postedOn: number;
  variant?: VariantType;
};

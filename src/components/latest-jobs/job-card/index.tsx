import { CirclePoundSterling, MapPin } from "lucide-react";
import { EProgrammingLanguage, PROGRAMMING_LANGUAGES } from "../../../constants";
import { JobCardType, VariantType } from "../../../types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import classNames from "classnames";
import { Button } from "../../ui/button";
import dayjs from "dayjs";

type ProgrammingLanguageCardProps = {
  programmingLanguageInfo?: EProgrammingLanguage;
};

const ProgrammingLanguageCard = (props: ProgrammingLanguageCardProps) => {
  const { programmingLanguageInfo } = props;

  if (!programmingLanguageInfo) {
    return;
  }

  const { text = '', icon: Icon } = PROGRAMMING_LANGUAGES[programmingLanguageInfo];

  return (
    <div
      className={classNames("bg-white flex items-center px-2 py-1 rounded-md border", {
        "text-brand-blue border-[var(--brand-blue)]": [EProgrammingLanguage.PYTHON, EProgrammingLanguage.C_PLUS_PLUS].includes(programmingLanguageInfo),
        "text-brand-orange border-[var(--brand-orange)]": [EProgrammingLanguage.JAVA].includes(programmingLanguageInfo),
      })}
    >
      <Icon />
      {
        !!text && (
          <p className="m-0 text-sm font-normal">
            &nbsp;
            {text}
          </p>
        )
      }
    </div>
  );
}

export default function JobCard(props: JobCardType) {
  const {
    programmingLanguages,
    title,
    location,
    salary,
    postedOn,
    description,
    variant = VariantType.BLUE
  } = props;

  const { currency, amount } = salary;
  const formattedSalary = `${currency}${amount}`;
  const formattedDate = dayjs(postedOn * 1000).format('DD/MM/YYYY');

  return (
    <Card
      className={classNames("w-[373px] h-[441px] px-[20px] py-[40px] rounded-4xl border-0", {
        'bg-brand-yellow text-brand-blue': variant === VariantType.YELLOW,
        'bg-brand-blue text-white': variant === VariantType.BLUE,
        'bg-brand-orange text-brand-black': variant === VariantType.ORANGE,
      })}
    >
      <CardHeader>
        <CardTitle>
          <div className="flex flex-nowrap gap-1">
            {programmingLanguages.map(item => {
              return (
                <ProgrammingLanguageCard programmingLanguageInfo={item} />
              );
            })}
          </div>
          <h5 className="mt-5 text-[30px]">
            {title}
          </h5>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex flex-col gap-[10px]">
          <p className="flex items-center gap-[10px] text-base">
            <MapPin />
            <p>
              {location}
            </p>
          </p>

          <p className="flex items-center gap-[10px] text-base">
            <CirclePoundSterling />
            <p>
              {formattedSalary}
            </p>
          </p>

          <p className="flex items-center gap-[10px] text-base mt-[20px]">
            {description}
          </p>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Button className="w-full bg-white text-brand-blue text-base rounded-4xl py-[20px]">
          View this job
        </Button>

        <p className="mt-[20px] text-sm ">
          Posted on {formattedDate}
        </p>
      </CardFooter>
    </Card>
  );
}

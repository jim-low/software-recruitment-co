import { Badge } from "lucide-react";
import { PROGRAMMING_LANGUAGES } from "../../../constants";
import { JobCardType } from "../../../types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";

export default function JobCard(props: JobCardType) {
  const {
    programmingLanguages,
    title,
    location,
    salary,
    postedOn,
    description
  } = props;

  return (
    <Card className="w-[373px] h-[441px]">
      <CardHeader>
        <CardTitle className="flex flex-nowrap">
          {programmingLanguages.map(item => {
            const { text, icon: Icon } = PROGRAMMING_LANGUAGES[item] || {};
            return (
              <Badge>
                <Icon />
                {text}
              </Badge>
            );
          })}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Card Description</CardDescription>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

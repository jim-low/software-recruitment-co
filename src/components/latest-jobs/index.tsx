import { ArrowLeft, ArrowRight } from "lucide-react";
import { JobCardType, VariantType } from "../../types";
import { EProgrammingLanguage } from "../../constants";
import JobCard from "./job-card";
import { Button } from "../ui/button";

export default function LatestJobs() {
  const jobs: JobCardType[] = [
    {
      programmingLanguages: [EProgrammingLanguage.PYTHON],
      title: 'Software Engineer',
      location: 'London',
      salary: {
        amount: '65,000',
        currency: '£',
      },
      description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
      postedOn: 1693238400,
      variant: VariantType.YELLOW
    },
    {
      programmingLanguages: [EProgrammingLanguage.PYTHON, EProgrammingLanguage.JAVA],
      title: 'Software Engineer',
      location: 'London',
      salary: {
        amount: '65,000',
        currency: '£',
      },
      description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
      postedOn: 1693238400,
      variant: VariantType.BLUE
    },
    {
      programmingLanguages: [EProgrammingLanguage.C_HASHTAG, EProgrammingLanguage.C_PLUS_PLUS],
      title: 'Software Engineer',
      location: 'London',
      salary: {
        amount: '65,000',
        currency: '£',
      },
      description: 'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
      postedOn: 1693238400,
      variant: VariantType.ORANGE
    },
  ];

  return (
    <div id='latest-jobs' className="w-full h-[802px] py-[80px] px-[120px] flex flex-col items-center gap-[30px] bg-brand-skyblue">
      <h2 className="text-brand-blue font-bold text-title-medium">Latest Jobs</h2>

      <div className="flex items-center justify-evenly gap-[40px]">
        {jobs.map(job => {
          return <JobCard {...job} />;
        })}
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-[18px]">
          <Button disabled className="w-[40px] h-[40px] bg-brand-darkblue text-white rounded-full">
            <ArrowLeft />
          </Button>

          <Button className="w-[40px] h-[40px] bg-brand-darkblue text-white rounded-full">
            <ArrowRight />
          </Button>
        </div>

        <p className="text-brand-darkblue font-bold">View more jobs</p>
      </div>
    </div>
  )
}


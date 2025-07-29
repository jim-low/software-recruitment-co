import { ArrowLeft, ArrowRight } from "lucide-react";
import { JobCardType } from "../../types";
import { EProgrammingLanguage } from "../../constants";
import dayjs from "dayjs";
import JobCard from "./job-card";

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
      postedOn: dayjs('2023-08-29'),
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
      postedOn: dayjs('2023-08-29'),
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
      postedOn: dayjs('2023-08-29'),
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
        <div className="flex items-center">
          <ArrowLeft />
          <ArrowRight />
        </div>

        <p>View more jobs</p>
      </div>
    </div>
  )
}


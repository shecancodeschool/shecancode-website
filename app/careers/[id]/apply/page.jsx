"use client"

import JobApplicationForm  from '../../../../components/JobApplicationForm'
import JobDescriptionPageBanner from "../../../../components/JobDescriptionPageBanner";
import { usePathname } from 'next/navigation';
import Jobs from '../../../../utils/jobsFakes';

const page = () => {
  const pathname = usePathname();
  const jobId = pathname.split('/')[2];

  const job = Jobs.find((job) => job._id === jobId);

  return (
    <>
      <JobDescriptionPageBanner job={job} />
      <JobApplicationForm />
    </>
  )
}

export default page
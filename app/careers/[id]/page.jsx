"use client"

import JobDescriptionPageBanner from "../../../components/JobDescriptionPageBanner";
import { usePathname } from 'next/navigation';
import Jobs from '../../../utils/jobsFakes';
import JobDescriptionContainter from '../../../components/JobDescriptionContainter';

const page = () => {
  const pathname = usePathname();
  const jobId = pathname.split('/')[2];

  const job = Jobs.find((job) => job._id === jobId);

  return (
    <>
      <JobDescriptionPageBanner job={job} />
      <JobDescriptionContainter job={job} />
    </>
  )
}

export default page
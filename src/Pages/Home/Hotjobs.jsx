import React, { use } from "react";
import JobsCard from "../Shared/JobsCard";

const Hotjobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h2>Jobs of the day</h2>
        <div className="grid grid-cols-3 gap-5">
          {jobs.map((job, index) => (
            <JobsCard key={index} job={job}></JobsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotjobs;

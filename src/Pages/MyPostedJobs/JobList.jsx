import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  console.log(jobs);

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl">Jobs created by you: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Location</th>
              <th>Job type</th>
              <th>View applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {
                jobs.map((job , index) => <tr key={job._id}>
              <th> {index + 1} </th>
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.jobType}</td>
              <td><Link to={`/applications/${job._id}`}>View applications</Link></td>

            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;

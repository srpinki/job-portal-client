import React, { use } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    title,
    location,
    description,
    company,
    company_logo,
    requirements,
    salaryRange,
    _id
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex justify-center gap-5 items-center">
        <figure className="w-20">
          <img src={company_logo} />
        </figure>
        <div>
          <h3 className="font-bold text-2xl">{company}</h3>
          <p className="flex items-center">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.currency} {salaryRange.min} - {salaryRange.max}
        </p>
        <p>{description}</p>
        <div className="card-actions ">
          {requirements.map((requirement, index) => (
            <div className="badge badge-outline" key={index}>
              {requirement}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;

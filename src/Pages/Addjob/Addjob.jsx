import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const Addjob = () => {
  const handleAddForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    //process requirements
    const requirementsString = newJob.requirements.split(",");
    const requirementsClean = requirementsString.map((req) => req.trim());
    newJob.requirements = requirementsClean;

    //process responsibilities
    const responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    newJob.responsibilities = responsibilities;
    console.log(newJob);

    newJob.status = "active";

    //save the job to the database
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-11/12 mx-auto ">
      <h2 className="text-center text-2xl my-5">Please add a job</h2>
      <div className="flex justify-center">
        <form onSubmit={handleAddForm} className="mx-auto my-8">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Basic Info</legend>
            <label className="label">Job Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Enter job title"
            />

            <label className="label">Company</label>
            <input
              type="text"
              name="company"
              className="input w-full"
              placeholder="Company"
            />

            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Company location"
            />

            <label className="label">Company Logo</label>
            <input
              type="url"
              name="company_logo"
              className="input w-full"
              placeholder="Company Logo"
            />
          </fieldset>

          {/* Job type */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Job type</legend>

            <div className="filter">
              <input
                className="btn filter-reset w-full"
                type="radio"
                name="jobType"
                aria-label="All"
              />
              <input
                className="btn w-full"
                type="radio"
                name="jobType"
                aria-label="On-site"
                value="On site"
              />
              <input
                className="btn w-full"
                type="radio"
                name="jobType"
                aria-label="Remote"
                value="Remote"
              />
              <input
                className="btn w-full"
                type="radio"
                name="jobType"
                aria-label="Hybride"
                value="Hybride"
              />
            </div>
          </fieldset>

          {/* Job category */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Job category</legend>
            <select defaultValue="Select a category" className="select w-full">
              <option disabled={true}>Category</option>
              <option>Marketing</option>
              <option>Developing</option>
              <option>Finance</option>
            </select>
          </fieldset>

          {/* Application deadline */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Application deadline</legend>
            <input
              type="date"
              name="applicationDeadline"
              className="input w-full"
            />
          </fieldset>

          {/* Salary Range */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Salary Range</legend>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div>
                <label className="label">Minimum Salary</label>
                <input
                  type="text"
                  name="min"
                  className="input w-full"
                  placeholder="Minimunm salary"
                />
              </div>

              <div>
                <label className="Maximum Salary">Maximum Salary</label>
                <input
                  type="text"
                  name="max"
                  className="input w-full"
                  placeholder="Maximum Salary"
                />
              </div>

              <div>
                <label className="label">Currency</label>
                <select
                  defaultValue="Select a currency"
                  className="select w-full"
                  name="currency"
                >
                  <option disabled={true}>Select a currency</option>
                  <option>BDT</option>
                  <option>USD</option>
                  <option>EURO</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* Job description */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Job description</legend>
            <textarea
              className="textarea w-full"
              name="description"
              placeholder="job description"
            ></textarea>
          </fieldset>

          {/* Job requirements */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Job requirements</legend>
            <textarea
              className="textarea w-full"
              name="requirements"
              placeholder="job requirements (seperated by comma)"
            ></textarea>
          </fieldset>

          {/* Job responsibilities */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">Job responsibilities</legend>
            <textarea
              className="textarea w-full"
              name="responsibilities"
              placeholder="job responsibilities (seperated by comma)"
            ></textarea>
          </fieldset>

          {/* hr Info */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
            <legend className="fieldset-legend">HR Related Info</legend>
            <label className="label">HR Name</label>
            <input
              type="text"
              name="hr_name"
              className="input w-full"
              placeholder="Enter HR name"
            />

            <label className="label">HR Email</label>
            <input
              type="text"
              name="hr_email"
              className="input w-full"
              placeholder="HR_email"
            />
          </fieldset>
          <input type="submit" className="btn btn-primary" value="Add job" />
        </form>
      </div>
    </div>
  );
};

export default Addjob;

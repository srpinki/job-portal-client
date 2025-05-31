import React from "react";
import { Link, useParams } from "react-router";
import AuthInfo from "../../Hooks/AuthInfo";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = AuthInfo();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
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
    <div className="flex justify-center ">
      <form onSubmit={handleApply}>
        <h3 className="text-2xl text-center">
          Apply job for: <Link to={`/jobs/${jobId}`}>Details</Link>
        </h3>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Enter your details here</legend>

          <label className="label">Linkedin Profile </label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="Enter your linkedin profile link"
          />

          <label className="label">Github Profile</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Enter your github profile link"
          />

          <label className="label">Resume</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Enter your resume here"
          />

          <label className="label">Author</label>
          <input type="submit" className="btn" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

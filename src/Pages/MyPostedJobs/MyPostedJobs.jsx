import React, { Suspense } from 'react';
import AuthInfo from '../../Hooks/AuthInfo';
import JobList from './JobList';
import { jobsCreatedByPromise } from '../../api/JobsApi';

const MyPostedJobs = () => {
    const {user} = AuthInfo();
    return (
        <div className='w-11/12 mx-auto'>
           <h2>My posted jobs:</h2>
           <Suspense>
            <JobList jobsCreatedByPromise = {jobsCreatedByPromise(user.email)}>
            </JobList>
           </Suspense>
        </div>
    );
};

export default MyPostedJobs;
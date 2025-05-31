import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id, title, company} = useLoaderData();
    
    
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-2xl'>{title}</h2>
            <p>{company}</p>
            <Link className='btn btn-primary' to={`/jobApply/${_id}`} >Apply</Link>
        </div>
    );
};

export default JobDetails;
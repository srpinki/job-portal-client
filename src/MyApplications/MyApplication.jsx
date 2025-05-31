import React, { Suspense } from 'react';
import MyApplicationstats from './MyApplicationstats';
import ApplicationList from './ApplicationList';
import AuthInfo from '../Hooks/AuthInfo';
import { myApplicationPromise } from '../api/applicationApi';

const MyApplication = () => {

    const {user} = AuthInfo();
    

    return (
        <div>
            <MyApplicationstats></MyApplicationstats>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}><ApplicationList myApplicationPromise = {myApplicationPromise(user.email)}></ApplicationList></Suspense>
            
        </div>
    );
};

export default MyApplication;
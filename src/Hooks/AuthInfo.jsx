import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const AuthInfo = () => {
   const AuthInfo = use(AuthContext);
    return AuthInfo;
};

export default AuthInfo;
import React from 'react';
import Navigation from '../Pages/Shared/Navigation';
import { Outlet } from 'react-router-dom';

const LoginLayOut = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayOut;
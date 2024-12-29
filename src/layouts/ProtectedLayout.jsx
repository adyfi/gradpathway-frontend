import React from 'react';
import Header from './Header';

const ProtectedLayout = ({ children }) => {
    return (
        <> 
            <Header children={children} />
        </>
    );
};
export default ProtectedLayout;
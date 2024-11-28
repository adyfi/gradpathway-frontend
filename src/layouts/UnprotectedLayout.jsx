import React from 'react'; 
import UnprotectedHeader from './UnprotectedHeader'; 
import UnprotectedFooter from './UnprotectedFooter'; 
const UnprotectedLayout = ({ children }) => { 
    return ( 
        <div> 
            <UnprotectedHeader /> {children} <UnprotectedFooter /> 
        </div> 
        ); 
    }; 
export default UnprotectedLayout;
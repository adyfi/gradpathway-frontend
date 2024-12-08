import React from 'react'; 
import CountryHeader from './CountryHeader';
import CountryFooter from './CountryFooter';

const CountryPageLayout = ({ children }) => { 
    return ( 
        <div> 
            <CountryHeader /> {children} <CountryFooter />
        </div> 
        ); 
    }; 
export default CountryPageLayout;
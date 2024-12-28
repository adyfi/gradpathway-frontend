import React from 'react'; 
import Header from './Header'; 
import Footer from './Footer'; 
const ProtectedLayout = ({ children }) => { 
    return (<div className='dashboard-main-wrapper'> <Header /> {children} </div>); 
}; 
export default ProtectedLayout;
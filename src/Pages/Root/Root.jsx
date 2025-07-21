import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
const Root = () => {
    return (
        <div >
           <div className='w-11/12 mx-auto'>
             <NavBar ></NavBar>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
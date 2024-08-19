import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from "../components/navigation/Navbar.tsx";

const RootLayout: React.FC = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default RootLayout;
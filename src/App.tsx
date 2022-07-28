import { NotFound } from 'components/Common';
import AdminLayout from 'components/Layout/Admin';
import RegisterPage from 'features/auth/pages/RegisterPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import { ADMIN_PATH, LOGIN_PATH, REGISTER_PATH, TEST_PATH, TOKEN } from './utils/index';

import { useEffect, useState } from 'react';
import './App.css';
import Home from 'components/Layout/Home';
import { HOME_PATH } from './utils/path';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Get url when page change
    const location = useLocation();
    // check login
    useEffect(() => {
        setIsLoggedIn(Boolean(localStorage.getItem(TOKEN)));
    }, [isLoggedIn, location]);

    return (
        <Routes>
            {/* Home Page */}
            <Route path={HOME_PATH} element={<Home />} />
            {/* Private Route */}
            {isLoggedIn ? (
                <>
                    <Route path={LOGIN_PATH} element={<AdminLayout />} />
                    <Route path={REGISTER_PATH} element={<AdminLayout />} />
                    <Route path={ADMIN_PATH} element={<AdminLayout />} />
                    <Route path={TEST_PATH} element={<RegisterPage />} />
                </>
            ) : (
                <>
                    <Route path={REGISTER_PATH} element={<RegisterPage />} />
                    <Route path={LOGIN_PATH} element={<LoginPage />} />
                    <Route path="*" element={<Home />} />
                </>
            )}
        </Routes>
    );
}

export default App;

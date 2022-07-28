import { NotFound } from 'components/Common';
import AdminLayout from 'components/Layout/Admin';
import RegisterPage from 'features/auth/pages/RegisterPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import { ADMIN_PATH, LOGIN_PATH, REGISTER_PATH, TEST_PATH } from './utils/index';

import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Get url when page change
    const location = useLocation();
    // check login
    useEffect(() => {
        setIsLoggedIn(Boolean(localStorage.getItem('access_token')));
    }, [isLoggedIn, location]);

    return (
        <Routes>
            {/* Home Page */}
            {/* <Route path={HOME_PATH} element={} /> */}
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
                    <Route path="*" element={<NotFound />} />
                </>
            )}
        </Routes>
    );
}

export default App;

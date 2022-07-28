import { NotFound, PrivateRoute } from 'components/Common';
import AdminLayout from 'components/Layout/Admin';
import RegisterPage from 'features/auth/pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import { LOGIN_PATH, REGISTER_PATH, ADMIN_PATH, TEST_PATH } from './utils/index';

import './App.css';

function App() {
    // check login
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    return (
        <Routes>
            {/* Home Page */}
            {/* <Route path={HOME_PATH} element={} /> */}
            {/* Login Page */}
            <Route path={LOGIN_PATH} element={<LoginPage />} />
            {/* Register Page */}
            <Route path={REGISTER_PATH} element={<RegisterPage />} />
            {/* Private Route */}
            {isLoggedIn ? (
                <>
                    <Route path={ADMIN_PATH} element={<AdminLayout />} />
                    <Route path={TEST_PATH} element={<RegisterPage />} />
                </>
            ) : (
                <Route path="*" element={<LoginPage />} />
            )}
            {/* Not found */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
}

export default App;

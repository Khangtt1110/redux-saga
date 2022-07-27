import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { LOGIN_PATH } from '../../utils/index';

export function PrivateRoute(props: RouteProps) {
    //Check if user is logged in
    // If yes, show route
    // Otherwise, redirect to login page
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    return isLoggedIn ? <Outlet /> : <Navigate to={LOGIN_PATH} />;
}

import { Navigate } from 'react-router-dom';
import { LOGIN_PATH, TOKEN } from '../../utils/index';

type Component = {
    component: React.ElementType;
};

export function PrivateRoute({ component: Page }: Component) {
    //Check if user is logged in
    // If yes, show route
    // Otherwise, redirect to login page
    const isLoggedIn = Boolean(localStorage.getItem(TOKEN));

    return isLoggedIn ? <Page /> : <Navigate to={LOGIN_PATH} />;
}

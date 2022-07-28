import { Button } from '@material-ui/core';
import { authActions } from 'features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCurrentUSer } from '../../features/auth/authSlice';
import { LOGIN_PATH } from '../../utils/path';
import { useNavigate } from 'react-router-dom';

type Props = {};

const AdminLayout = (props: Props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleSubmitLogout = () => {
        dispatch(authActions.logout());
        navigate(LOGIN_PATH);
    };
    const select = useAppSelector(selectCurrentUSer);
    console.log('User: ', select);

    return (
        <div>
            <h1>AdminLayout</h1>
            <Button onClick={handleSubmitLogout}>Logout</Button>
        </div>
    );
};

export default AdminLayout;

import {
    Box,
    Button,
    Card,
    CardContent,
    FormGroup,
    makeStyles,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';
// Form and validation
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { User } from 'models';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../app/hooks';
import { REGISTER_PATH } from '../../../utils/index';
import { authActions } from '../authSlice';
import { ADMIN_PATH } from '../../../utils/path';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    title: {
        textAlign: 'center',
        margin: '20px',
    },
    form: {
        minWidth: '30vw',
    },
    input: {
        marginTop: 20,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
    link: {
        width: 'fit-content',
        textDecoration: 'none',
        color: 'green',
        marginLeft: 'auto',
    },
    button: {
        background: 'hsl(206,100%,52%)',
    },
}));

export default function LoginPage() {
    const navigate = useNavigate();
    const classes = useStyles();
    // const [notification, setNotification] = useState(false);
    const dispatch = useAppDispatch();

    // Setup initial value of input field
    const initialValue: User = {
        id: '',
        username: '',
        password: '',
    };

    // Check validation
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Required').min(8, 'Must be at least 8 characters'),
        password: Yup.string().required('Required').min(8, 'Must be at least 8 characters'),
    });
    // handle submit
    const handleSubmitLogin = (values: User, resetForm: any) => {
        // const data = JSON.parse(localStorage.getItem('user') || '');
        // if (data.username === values.username && data.password === values.password) {
        //     navigate(ADMIN_PATH);
        // } else {
        //     resetForm();
        //     setNotification(true);
        // }
        dispatch(
            authActions.login({
                username: values.username,
                password: values.password,
            })
        );
        // navigate(ADMIN_PATH);
    };
    return (
        <div className={classes.root}>
            <Paper>
                <Typography variant="h5" component="h1" className={classes.title}>
                    Student Management
                </Typography>
                <Box mt={4} className={classes.form}>
                    <Card>
                        <CardContent>
                            <Formik
                                validationSchema={validationSchema}
                                initialValues={initialValue}
                                onSubmit={(values, { resetForm }) => {
                                    handleSubmitLogin(values, resetForm);
                                }}
                            >
                                {({ values, dirty, isValid, errors, touched }) => (
                                    <Form className="form">
                                        <FormGroup>
                                            {/* show notification */}
                                            {/* {notification && (
                                                <Typography
                                                    className="fail-signification"
                                                    component="h5"
                                                >
                                                    Login fail
                                                </Typography>
                                            )} */}
                                            {/* Username input */}
                                            <Field
                                                name="username"
                                                as={TextField}
                                                label="Username"
                                                error={Boolean(errors.username && touched.username)}
                                                className={classes.input}
                                            />
                                            <ErrorMessage
                                                className={classes.error}
                                                component="div"
                                                name="username"
                                            />
                                            {/* Password input */}
                                            <Field
                                                name="password"
                                                as={TextField}
                                                label="Password"
                                                error={Boolean(errors.password && touched.password)}
                                                className={classes.input}
                                            />
                                            <ErrorMessage
                                                className={classes.error}
                                                component="div"
                                                name="password"
                                            />
                                            <Link className={classes.link} to={REGISTER_PATH}>
                                                <p>Sign up</p>
                                            </Link>
                                            {/* Submit button */}
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                className={classes.button}
                                                disabled={!(dirty && isValid)}
                                            >
                                                Submit
                                            </Button>
                                        </FormGroup>
                                    </Form>
                                )}
                            </Formik>
                        </CardContent>
                    </Card>
                </Box>
            </Paper>
        </div>
    );
}

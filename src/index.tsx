import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import { history } from 'utils/history';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
                <CssBaseline />
            </Router>
            {/* <ConnectedRouter history={history}> */}
            {/* </ConnectedRouter> */}
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

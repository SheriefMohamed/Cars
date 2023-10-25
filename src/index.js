import 'bulma/css/bulma.min.css';
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

const elm = document.getElementById('root');
const root = ReactDOM.createRoot(elm);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
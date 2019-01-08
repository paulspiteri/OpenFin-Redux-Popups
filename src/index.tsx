import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppContainer } from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, Store } from 'redux';
import LogInReducer from './LogInReducer';
import { Popup1Container } from './Popup1';
import { Popup2Container } from './Popup2';
import { getOpenFinWindowOptions } from './OpenFinHelpers';

window.init = async (store: Store<any, any>) => {
    window.reduxStore = store;
    const windowOptions = await getOpenFinWindowOptions();
    let content: React.ReactElement<any>;
    if (windowOptions && windowOptions.customData === 'popup1') {
        content = <Popup1Container />;
    } else if (windowOptions && windowOptions.customData === 'popup2') {
        content = <Popup2Container />;
    } else {
        content = <AppContainer />
    }
    ReactDOM.render(
        <Provider store={store}>
            {content}
        </Provider>,
        document.getElementById('root'));
};

const start = async function () {
    const windowOptions = await getOpenFinWindowOptions();
    if (!windowOptions || !windowOptions.customData) {
        console.log('creating new store');
        const store = createStore(combineReducers({ login: LogInReducer }));
        window.init(store);
    }
};
start();
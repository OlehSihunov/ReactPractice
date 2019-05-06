import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./Reducers/rootReducer";
import ErrorBoundary from './Containers/ErrorBoundary/ErrorBoundary';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(
    rootReducer,
    composeWithDevTools( applyMiddleware(thunk))
)



ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>
    </ErrorBoundary>, document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

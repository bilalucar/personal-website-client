import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchPostsError, fetchPostsStart, receivePost } from './store/actions';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, middleware);

const API_URL = 'https://us-central1-blog-269208.cloudfunctions.net/blog/api/v1/posts';

// @ts-ignore
store.dispatch((dispatch: any) => {
    dispatch(fetchPostsStart);
    axios.get(API_URL)
        .then((response) => dispatch(receivePost(response.data)))
        .catch(error => dispatch(fetchPostsError(error)));
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

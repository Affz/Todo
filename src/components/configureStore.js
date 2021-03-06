import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';


import authorization from '../middleware/authorization';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);


export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

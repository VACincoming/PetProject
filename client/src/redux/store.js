import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const logMiddleware = (store) => (next) => (action) => next(action);
const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action,
        });
    }
    return next(action);
};

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
    )
);

export default store;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = () => {
  const redux_env =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(reducers, redux_env, applyMiddleware(thunk));
  return store;
};

export default configureStore();

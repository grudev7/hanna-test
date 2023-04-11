import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import card from "./reducers";

const rootReducer = combineReducers({
  card,
});

// Create a thunk middleware that can dispatch async actions
const asyncMiddleware = thunk;

// Create a middleware that logs all actions and state changes
const loggerMiddleware = store => next => action => {
  const result = next(action);
  return result;
};

// Combine the middlewares into a single middleware chain
const middleware = applyMiddleware(asyncMiddleware, loggerMiddleware);

// Create the store with the combined reducers and middleware
const store = createStore(
  rootReducer,
  compose(
    middleware,
  )
);

export default store;

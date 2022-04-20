import { legacy_createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import reducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

// call API: redux-thunk, redux-saga

export default store

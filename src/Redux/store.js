import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./users/userReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./Sagas/rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(userReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

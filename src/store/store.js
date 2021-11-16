import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import images from "./images";
import app from "./app";

let rootReducer = combineReducers({
    app,
    images,
});

let middleWare = [thunk, logger];

let store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;

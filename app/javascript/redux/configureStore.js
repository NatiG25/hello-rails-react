import { combineReducers, legacy_createStore as createStore } from "redux";
import greetingReducer from "./greeting/greeting";

const rootReducer = combineReducers({
    greetingReducer
})

const store = createStore(rootReducer);

export default store;

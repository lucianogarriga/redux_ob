import {combineReducers} from "redux";
import { todosReducer } from "./todosReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers(
    {
        // state name : reducer that will control it
        todosState: todosReducer,
        filterState: filterReducer

        // ad more states and reducers to include them in the store
    }
)
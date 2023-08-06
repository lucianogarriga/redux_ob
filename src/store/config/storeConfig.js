import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../reducers/rootReducer'; 
import {composeWithDevTools} from 'redux-devtools-extension';

export const createAppStore = () => {
    let store = configureStore({reducer: rootReducer}, composeWithDevTools()); 
    return store;
}
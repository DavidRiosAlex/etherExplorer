import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducers, sagas} from '../../Business';

export const axiosEtherScan = axios.create({
    baseURL: process.env.REACT_APP_ETHERSCAN_URL,
    params: {
        apikey: process.env.REACT_APP_ETHERSCAN_KEY,
    }
});

const sagaMiddleware = createSagaMiddleware();
const compose = composeWithDevTools(applyMiddleware(sagaMiddleware));
const sagasStore = createStore(combineReducers(reducers), compose);

/* const store = configureStore({
    reducer: combineReducers(reducers),
    middleware: defaultMiddleware => defaultMiddleware({
        thunk: {
            extraArgument: {
                fetch: axiosEtherScan,
            }
        }
    })
}); */

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof sagasStore.getState>;
export type AppDispatch = typeof sagasStore.dispatch;
export type EtherScanRequest = typeof axiosEtherScan;
export default sagasStore;
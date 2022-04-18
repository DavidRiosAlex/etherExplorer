import React from 'react';
import {all} from 'redux-saga/effects';
import {sagaActions} from './sagas';


const Dashboard = React.lazy(() => import('./screens/Dashboard/Home'));
const Address = React.lazy(() => import('./screens/Address/Address'));
const Blocks = React.lazy(() => import('./screens/Blocks'));
const Transactions = React.lazy(() => import('./screens/Transactions'));
const TransactionDetail = React.lazy(() => import('./screens/TransactionDetail'));

interface Route {
    component: React.FC;
    path: string;
}

export const routes: Route[] = [
    {path: '/home', component: Dashboard},
    {path: '/tx/:number', component: Transactions},
    {path: '/tx/:tx', component: TransactionDetail},
    {path: '/block/:number/tx', component: Blocks},
    {path: '/address/:hash', component: Address},
];

export function* sagas () {
    yield all(sagaActions);
} 

export * from './reducers';

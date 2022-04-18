import React, { Suspense } from 'react';
import {Provider} from 'react-redux';
import {Router} from './Router';
import store from './Reducers';
import { Loading } from '../Commons/Components/Loading';

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<Loading type="fullpage" />}>
                <Router />
            </Suspense>
        </Provider>
    );
}

export default React.memo(App);

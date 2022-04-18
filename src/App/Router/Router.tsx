import React, {memo} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {routes} from '../../Business';

/* interface RouterProps {
    children?: Element;
}
 */
function RouterComponent () {
    return (
        <BrowserRouter>
            <Routes>
                {(() => { return routes.map(route => <Route key={route.path} path={route.path} element={<route.component />} />);})()}
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
}

export const Router = memo(RouterComponent);

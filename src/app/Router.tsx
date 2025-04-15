import { memo } from 'react';
import { RouteObject, useRoutes } from 'react-router';

import HomePage from '~/pages/home_page/HomePage';
import JuicyPage from '~/pages/juicy_page/JuicyPage';
import VeganPage from '~/pages/vegan_page/VeganPage';

const paths = {
    root: {
        path: '/',
    },
    main: {
        path: '/',
    },
    juicy: {
        path: '/juicy',
    },
    vegan: {
        path: '/vegan',
    },
};

const allRoutes: RouteObject = {
    path: paths.root.path,
    children: [
        { path: paths.root.path, element: <HomePage /> },
        { path: paths.juicy.path, element: <JuicyPage /> },
        { path: paths.vegan.path, element: <VeganPage /> },
    ],
};

export const Router = memo(() => useRoutes([allRoutes]));
Router.displayName = 'Router';

export default Router;

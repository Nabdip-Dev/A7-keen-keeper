import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Timeline from '../page/timeline/Timeline';
import Stats from '../page/stats/Stats';
import Home from '../page/home/Home';
import NotFound from '../page/notFound/NotFound';
import FriendDetiles from '../page/friendDetiles/FriendDetiles';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/friend/:id",
                element: <FriendDetiles />,
            },
            {
                path: "/timeline",
                element: <Timeline />,
            },
            {
                path: "/stats",
                element: <Stats />,
            },
           

        ],
        errorElement: <NotFound/>
    },
]);

export default router;
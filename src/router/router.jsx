import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Timeline from '../page/timeline/Timeline';
import Stats from '../page/stats/Stats';
import Home from '../page/home/Home';

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
                path: "/timeline",
                element: <Timeline />,
            },
            {
                path: "/stats",
                element: <Stats />,
            }
            
        ],
    },
]);

export default router;
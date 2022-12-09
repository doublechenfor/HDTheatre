import { lazy } from 'react';

export interface IRouterItem {
    index: true;
    path: string;
    element: Function;
    title: string;
}

export const AppRouter:IRouterItem[] = [
    {
        path: '/',
        title: '主页',
        index: true,
        element: lazy(()=> import('../layouts/PageMain'))
    },
    {
        path: '/new',
        title: '新剧',
        index: true,
        element: lazy(()=> import('../layouts/PageNew')),
    },
    {
        path: '/sort',
        title: '排序',
        index: true,
        element: lazy(()=> import('../layouts/PageSort')),
    },
]